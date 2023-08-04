import NewsList from '../../components/NewsList/NewsList';
import NewsSearch from '../../components/NewsSearch/NewsSearch';
import Container from 'components/Container/Container';
// import Loader from 'components/Loader';
import ScrollBtn from 'components/ScrollBtn/ScrollBtn';
import NewsPagination from 'components/NewsPagination/NewsPagination';
import Background from 'components/Background/Background';

import { Title, NewsWrapper, Wrapper } from './NewsPage.styled';
// import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { fetchNews, fetchNewsByQuery2 } from 'redux/news/news-operation';

import {
  selectAllNews,
  selectHints,
  // selectNewsError,
  selectNewsLoading,
} from 'redux/news/news-selectors';
import { setNews } from 'redux/news/news-actions';
// import { Wrapper } from 'components/Loader/Loader.styled';

const NewsPage = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectAllNews);
  const { totalHints, hints } = useSelector(selectHints);
  // const isError = useSelector(selectNewsError);
  const isLoading = useSelector(selectNewsLoading);
  const [totalPages, setTotalPages] = useState(null);
  const [searchKeyword] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page') || 1;
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    dispatch(setNews());

    const getNews = (searchQuery, page) => {
      const fetchNewsByQuery = () => {
        dispatch(
          searchQuery
            ? fetchNewsByQuery2({ query: searchQuery, page: page })
            : fetchNews({ page: page })
        );
      };
      return fetchNewsByQuery();
    };

    getNews(searchQuery, page);
  }, [dispatch, searchQuery, page]);

  useEffect(() => {
    if (totalHints) {
      const pages = Math.ceil(totalHints / hints);
      setTotalPages(pages);
    }
  }, [totalHints, hints]);

  const onSearch = searchQuery => {
    var currentQuery = searchParams.get('query') || '';
    if (searchQuery !== currentQuery) {
      var params = searchQuery ? { query: searchQuery, page: 1 } : { page: 1 };
      setSearchParams(params);
    }
  };

  const onPageChange = (currentPage) => {
    if (page === currentPage) {
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    var params = searchQuery
      ? { query: searchQuery, page: currentPage }
      : { page: currentPage };

    setSearchParams(params);
  };

  // if (isLoading && !isError) {
  //   return <Loader />;
  // }

  const filteredNews = data.filter(news =>
    news.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <NewsWrapper>
      <Background />
      <Container>
        <Title>News</Title>
        <NewsSearch onFormSubmit={onSearch}></NewsSearch>
        {/* {isLoading ? (
          <Loader />
        ) : (
          <> */}
            <NewsList data={filteredNews} />
            <ScrollBtn />

            {!isLoading && totalPages > 1 && (
              <Wrapper>
                <NewsPagination
                  currentPage={Number(page)}
                  totalPagesCount={totalPages}
                  onPageChange={page => onPageChange(page)}
                />
              </Wrapper>
            )}
          {/* </>
        )} */}
      </Container>
    </NewsWrapper>
  );
};

export default NewsPage;
