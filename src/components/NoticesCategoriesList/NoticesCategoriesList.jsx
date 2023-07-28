import React, { useState } from 'react';
import NoticeCategoryItem from '../../components/NoticeCategoryItem/NoticeCategoryItem';
import { CategoriesListWrapper } from './NoticesCategoriesList.styled';

import { useOutletContext } from 'react-router-dom';

const NoticesCategoriesList = () => {
  const { items, handleDelete, handleFavoriteClick } = useOutletContext();

  return (
    <>
      {items.length > 0 && (
        <CategoriesListWrapper>
          {items.map(item => (
            <NoticeCategoryItem
              key={item._id}
              item={item}
              onDelete={handleDelete}
              onFavorite={handleFavoriteClick}
            />
          ))}
        </CategoriesListWrapper>
      )}
    </>
  );
};

export default NoticesCategoriesList;
