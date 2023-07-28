import React, { useState } from 'react';
import NoticeCategoryItem from '../../components/NoticeCategoryItem/NoticeCategoryItem';
import { CategoriesListWrapper } from './NoticesCategoriesList.styled';
import Pagination from '../Pagination/Pagination';

const NoticesCategoriesList = () => {
  const [currentPage, setCurrentPage] = useState(1); // Создайте состояние для текущей страницы
  const itemsPerPage = 10;

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber); // Обновляем состояние текущей страницы при изменении пагинации
  };

  return (
    <>
      <CategoriesListWrapper>
        <NoticeCategoryItem
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </CategoriesListWrapper>
      <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
    </>
  );
};

export default NoticesCategoriesList;
