import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import NoticesSearch from 'components/NoticesSearch';
import NoticesCategoriesNav from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFiltersBtn from '../../components/NoticesFiltersBtn/NoticesFiltersBtn';
import NoticesAddPetBtn from '../../components/NoticesAddPetBtn/NoticesAddPetBtn';
// import NoticeCategoryItem from '../../components/NoticeCategoryItem/NoticeCategoryItem';
import NoticesCategoriesList from '../../components/NoticesCategoriesList/NoticesCategoriesList';

import {
  NoticeFilterContainer,
  NoticesPageContainer,
  NoticesPageContainerFilterAdd,
  Title,
} from './NoticesPage.styled';

import { getNotices, getFilterValues, createSearchParams } from 'utils';
import { getUser, isUserLogin } from 'redux/auth/auth-selectors';
import { deleteNoticeById } from 'api/notices/notices-api';
import {
  addFavoriteNotice,
  deleteFavoriteNotice,
} from 'api/notices/favorite-api';

const PER_PAGE = 12;

export const NoticesPage = () => {
  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const isLogin = useSelector(isUserLogin);
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const prevPathname = useRef(pathname);

  const query = searchParams.get('query');
  const gender = searchParams.get('gender');
  const age = searchParams.get('age');
  const page = searchParams.get('page');

  const resetPage = useCallback(() => {
    searchParams.set('page', 1);
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  const handleFilterChange = target => {
    createSearchParams(target, searchParams, setSearchParams);
    resetPage();
  };

  const handleFilterReset = value => {
    if (value === 'male' || value === 'female') {
      searchParams.delete('gender');
    } else {
      searchParams.delete('age');
    }

    setSearchParams(searchParams);
    resetPage();
  };

  const handleSubmit = ({ query }) => {
    searchParams.set('query', query);

    console.log(query);

    setSearchParams(searchParams);
    resetPage();
  };

  const handlePageClick = e => {
    searchParams.set('page', e.selected + 1);
    setSearchParams(searchParams);
  };

  const handleClear = () => {
    searchParams.delete('query', query);
    setSearchParams(searchParams);
    resetPage();
  };

  const getApiNotices = useCallback(async () => {
    const path = pathname.split('/');
    const category = path[path.length - 1];

    try {
      const { pets, total } = await getNotices({
        category,
        query,
        gender,
        page,
        limit: PER_PAGE,
        age,
      });

      if (pets.length === 0 && total) {
        searchParams.set('page', page - 1);
        setSearchParams(searchParams);
        return;
      }

      if (total === 0) {
        setItems([]);
        resetPage();
        setSearchParams(searchParams);
        setIsLoading(false);
        return;
      }

      setPageCount(Math.ceil(total / PER_PAGE));
      setItems(pets);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [
    age,
    gender,
    page,
    pathname,
    query,
    resetPage,
    searchParams,
    setSearchParams,
  ]);

  const handleDelete = useCallback(
    async id => {
      try {
        await deleteNoticeById(id);
        await getApiNotices();
        toast.success('Deleted successfully!');
      } catch (error) {
        toast.error(error.message);
      }
    },
    [getApiNotices]
  );

  const handleFavoriteClick = useCallback(
    async id => {
      if (!isLogin) {
        toast.error('Sign in to add to favorites.');
        return;
      }

      const path = pathname.split('/');
      const category = path[path.length - 1];

      if (user.favoriteNotices.includes(id)) {
        try {
          await deleteFavoriteNotice(id);
          // dispatch(refreshUser());
          if (category === 'favorite') {
            await getApiNotices();
          }
          toast.success('Removed successfully!');
        } catch (error) {
          toast.error(error.message);
        }
        return;
      }

      try {
        await addFavoriteNotice(id);
        // dispatch(refreshUser());
        toast.success('Added successfully!');
      } catch (error) {
        toast.error(error.message);
      }
    },
    [dispatch, getApiNotices, isLogin, pathname, user.favoriteNotices]
  );

  useEffect(() => {
    if (!searchParams.has('page')) {
      resetPage();
    }

    setIsLoading(true);

    const path = pathname.split('/');
    const category = path[path.length - 1];

    if (
      (category === 'favorite' && !isLogin) ||
      (category === 'own' && !isLogin)
    ) {
      return;
    }

    if (prevPathname.current !== pathname) {
      // reset pagination for category change
      prevPathname.current = pathname;
      resetPage();
    }

    getApiNotices();
  }, [getApiNotices, isLogin, pathname, resetPage, searchParams]);

  const filters = useMemo(() => getFilterValues(searchParams), [searchParams]);

  return (
    <div>
      <Title>Find your favorite pet</Title>
      <NoticesSearch onFormSubmit={handleSubmit} onClear={handleClear} />
      <NoticesPageContainer>
        <NoticeFilterContainer>
          <NoticesCategoriesNav searchParams={searchParams} />
          <NoticesPageContainerFilterAdd>
            <NoticesFiltersBtn />
            <NoticesAddPetBtn />
          </NoticesPageContainerFilterAdd>
        </NoticeFilterContainer>
      </NoticesPageContainer>
      <NoticesCategoriesList />
    </div>
  );
};

export default NoticesPage;
