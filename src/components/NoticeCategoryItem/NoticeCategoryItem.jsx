// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { isUserLogin } from '../../redux/auth/auth-selectors';
// import { useDispatch } from 'react-redux';
import { useState } from 'react';

import {
  AnimalCard,
  AnimalImage,
  AnimalInfo,
  StyledCardButtonBottom,
  CategoryBadge,
  IconWrapper,
  StyledComent,
  LearnMore,
  StyledCardButtonRight,
  RightButtonWrapper,
} from './NoticeCategoryItem.styled';

import { HiOutlineLocationMarker } from 'react-icons/hi';
import {
  MdOutlineAccessTime,
  MdMale,
  MdFemale,
  MdFavoriteBorder,
  MdFavorite,
} from 'react-icons/md';
// import Notiflix from 'notiflix';

import NoticesModal from 'components/NoticesModal';
import NoticesModalContent from 'components/NoticesModalContent';

import { calcPetAge, normalizeCategory } from 'utils';
import { useSelector } from 'react-redux';
import { getUser, isUserLogin } from 'redux/auth/auth-selectors';

export const NoticeCategoryItem = ({ item, onDelete, onFavorite }) => {
  const [showLearnMore, setShowLearnMore] = useState(false);
  const isLogin = useSelector(isUserLogin);
  const user = useSelector(getUser);

  const { _id, category, title, location, date, sex, photo } = item;

  const age = calcPetAge(date);
  const normCategory = normalizeCategory(category);

  const favorite = isLogin && user.favorite.includes(_id);

  // const setfavorite = () => {
  //   console.log(user?.favorite);
  //   if (!user?.favorite) {
  //     console.log('всередині undefined');
  //     dispatch(refreshUser());
  //   } else {
  //     return isLogin && user.favorite.includes(_id);
  //   }
  // };

  // const favorite = setfavorite();

  return (
    <>
      <AnimalCard>
        <CategoryBadge>{normCategory}</CategoryBadge>
        <AnimalImage src={photo} alt={title} />
        <AnimalInfo>
          <StyledCardButtonBottom>
            <IconWrapper>
              <HiOutlineLocationMarker size={24} />
            </IconWrapper>
            {location}
          </StyledCardButtonBottom>

          <StyledCardButtonBottom>
            <IconWrapper>
              <MdOutlineAccessTime size={24} />
            </IconWrapper>
            {age}
          </StyledCardButtonBottom>

          <StyledCardButtonBottom>
            <IconWrapper>
              {sex === 'male' ? <MdMale size="24" /> : <MdFemale size="24" />}
            </IconWrapper>
            {item.sex}
          </StyledCardButtonBottom>
        </AnimalInfo>
        <StyledComent>{title}</StyledComent>
        <LearnMore onClick={() => setShowLearnMore(true)}>Learn More</LearnMore>
        <RightButtonWrapper>
          <StyledCardButtonRight onClick={() => onFavorite(_id)}>
            {favorite ? (
              <MdFavorite size="24" />
            ) : (
              <MdFavoriteBorder size="24" />
            )}
          </StyledCardButtonRight>
        </RightButtonWrapper>
      </AnimalCard>
      {showLearnMore && (
        <NoticesModal onClose={() => setShowLearnMore(false)}>
          <NoticesModalContent item={item} onFavorite={onFavorite} />
        </NoticesModal>
      )}
    </>
  );
};

export default NoticeCategoryItem;
