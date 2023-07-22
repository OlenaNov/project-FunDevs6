import React from 'react';
import NoticeCategoryItem from '../../components/NoticeCategoryItem/NoticeCategoryItem';
import { CategoriesListWrapper } from './NoticesCategoriesList.styled';

const NoticesCategoriesList = () => {
  return (
    <>
      <CategoriesListWrapper>
        <NoticeCategoryItem />
      </CategoriesListWrapper>
    </>
  );
};

export default NoticesCategoriesList;
