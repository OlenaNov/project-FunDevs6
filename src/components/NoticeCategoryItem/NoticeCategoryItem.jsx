import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { isUserLogin } from '../../redux/auth/auth-selectors';

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
import { animal } from './animal';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import {
  MdOutlineAccessTime,
  MdMale,
  MdFemale,
  MdFavoriteBorder,
  MdFavorite,
} from 'react-icons/md';

export const NoticeCategoryItem = () => {
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);
  const isUserAuthenticated = useSelector(isUserLogin);

  const handleHeartIconClick = () => {
    if (isUserAuthenticated) {
      setIsAddedToFavorites(prevState => !prevState);
    } else {
      alert('Пожалуйста, авторизуйтесь для использования данного функционала.');
    }
  };

  return (
    <>
      {animal.map(item => (
        <AnimalCard key={item.id}>
          <CategoryBadge>{item.category}</CategoryBadge>
          <AnimalImage src={item.image} alt={item.title} />
          <AnimalInfo>
            <StyledCardButtonBottom>
              <IconWrapper>
                <HiOutlineLocationMarker size={24} />
              </IconWrapper>
              {item.place}
            </StyledCardButtonBottom>

            <StyledCardButtonBottom>
              <IconWrapper>
                <MdOutlineAccessTime size={24} />
              </IconWrapper>
              {item.dateOfBirth}
            </StyledCardButtonBottom>

            <StyledCardButtonBottom>
              <IconWrapper>
                {item.gender === 'male' ? (
                  <MdMale size="24" />
                ) : (
                  <MdFemale size="24" />
                )}
              </IconWrapper>
              {item.gender}
            </StyledCardButtonBottom>
          </AnimalInfo>
          <StyledComent>{item.title}</StyledComent>
          <LearnMore>Learn More</LearnMore>
          <RightButtonWrapper>
            <StyledCardButtonRight onClick={handleHeartIconClick}>
              {isAddedToFavorites ? (
                <MdFavorite size="24" />
              ) : (
                <MdFavoriteBorder size="24" />
              )}
            </StyledCardButtonRight>
          </RightButtonWrapper>
        </AnimalCard>
      ))}
    </>
  );
};

export default NoticeCategoryItem;
