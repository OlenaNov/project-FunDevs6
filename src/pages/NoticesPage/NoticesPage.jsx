import { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import {
  Outlet,
  useLocation,
  useSearchParams,
  useNavigate,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createSearchParams } from 'utils';
import { getFilterValues } from 'utils';
import NoticesSearch from 'components/NoticesSearch';
import NoticesCategoriesNav from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFilters from '../../components/NoticesFilters';
import NoticesSelectedFilters from 'components/NoticesSelectedFilters';
import NoticesAddPetBtn from '../../components/NoticesAddPetBtn/NoticesAddPetBtn';
import NoticesNotFound from '../../components/NoticesNotFound';
import Loader from '../../components/Loader';
import Background from '../../components/Background/Background';
import ScrollBtn from '../../components/ScrollBtn/ScrollBtn';

import {
  NoticesContainter,
  NoticeFilterContainer,
  NoticesPageContainer,
  NoticesPageContainerFilterAdd,
  Title,
} from './NoticesPage.styled';

import { getNotices } from 'utils';
import { getUser, isUserLogin } from 'redux/auth/auth-selectors';
import { deleteNoticeById } from 'api/notices/notices-api';
import {
  addFavoriteNotice,
  deleteFavoriteNotice,
} from 'api/notices/favorite-api';
import Pagination from '../../components/Pagination';
import { refreshUser } from 'redux/auth/auth-operations';
import Modal from 'components/Modal/Modal';
import ModalContentAttention from 'components/ModalContentAttention/ModalContentAttention';

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
  const navigate = useNavigate();

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

    setSearchParams(searchParams);
    resetPage();
  };

  const handleClearSearchQuery = () => {
    searchParams.delete('query', query);
    setSearchParams(searchParams);
    resetPage();
  };

  const handlePageClick = e => {
    searchParams.set('page', e.selected + 1);
    setSearchParams(searchParams);
  };

  const getApiNotices = useCallback(async () => {
    const path = pathname.split('/');
    const category = path[path.length - 1];
    setIsLoading(true);

    try {
      const { notices, totalHits } = await getNotices({
        category,
        query,
        gender,
        page,
        limit: PER_PAGE,
        age,
      });

      if (notices.length === 0 && totalHits) {
        searchParams.set('page', page - 1);
        resetPage();
        setSearchParams(searchParams);
        return;
      }

      if (totalHits === 0) {
        setItems([]);
        resetPage();
        setSearchParams(searchParams);
        setIsLoading(false);
        return;
      }

      setPageCount(Math.ceil(totalHits / PER_PAGE));
      setItems(notices);
    } catch (error) {
      console.error(error.message);
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
        return navigate('/login');
      }

      const path = pathname.split('/');
      const category = path[path.length - 1];

      if (user.favorite.includes(id)) {
        try {
          await deleteFavoriteNotice(id);
          dispatch(refreshUser());
          if (category === 'favorite') {
            await getApiNotices();
          }
          toast.error('Removed successfully!');
        } catch (error) {
          toast.error(error.message);
        }
        return;
      }

      try {
        await addFavoriteNotice(id);
        dispatch(refreshUser());
        toast.success('Added successfully!');
      } catch (error) {
        toast.error(error.message);
      }
    },
    [isLogin, pathname, user.favorite, navigate, dispatch, getApiNotices]
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
      prevPathname.current = pathname;
      resetPage();
    }

    getApiNotices();
  }, [getApiNotices, isLogin, pathname, resetPage, searchParams]);

  const filters = useMemo(() => getFilterValues(searchParams), [searchParams]);

  const [ showModalAttention, setShowModalAttention] = useState(true);

  const toggleModalAttention = () => {
    setShowModalAttention(s => !s);
  };

  return (
    <>
      <Background />
      <NoticesContainter>
        <Title>Find your favorite pet</Title>
        <NoticesSearch
          onFormSubmit={handleSubmit}
          onClear={handleClearSearchQuery}
        />
        <ScrollBtn />
        <NoticesPageContainer>
          <NoticeFilterContainer>
            <NoticesCategoriesNav searchParams={searchParams} />
            <NoticesPageContainerFilterAdd>
              {filters.length > 0 && (
                <NoticesSelectedFilters
                  filters={filters}
                  handleReset={handleFilterReset}
                />
              )}
              <NoticesFilters onFilter={handleFilterChange} filters={filters} />
              <NoticesAddPetBtn />
            </NoticesPageContainerFilterAdd>
          </NoticeFilterContainer>
        </NoticesPageContainer>
        {isLoading && <Loader />}
        {!isLoading && (
          <Outlet context={{ items, handleDelete, handleFavoriteClick }} />
        )}
        {items.length === 0 && !isLoading && (
          <NoticesNotFound title={'No animals were found for your request'} />
        )}
        {!isLoading && pageCount > 1 && items.length > 0 && (
          <Pagination
            onPageClick={handlePageClick}
            pageCount={pageCount}
            currentPage={Number(page)}
          />
        )}
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        {showModalAttention && (
        <Modal
          onClose={toggleModalAttention}
          children={() => (
            <ModalContentAttention
              title="Attention"
              message="We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."
              fnYes={() => console.log('Yes')}
              fnCancel={() => console.log('Cancel')}
            />
          )}
        />
      )}
      </NoticesContainter>
    </>
  );
};

export default NoticesPage;
