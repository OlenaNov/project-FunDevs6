import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { isUserLogin } from '../../redux/auth/auth-selectors';
import { useDispatch } from 'react-redux';

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
import Notiflix from 'notiflix';

import { calcPetAge, normalizeCategory } from 'utils';

export const NoticeCategoryItem = ({ item, onDelete, onFavorite }) => {

  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);
  const isUserAuthenticated = useSelector(isUserLogin);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllAnimal());
  // }, [dispatch]);

  // // const animal = getAllAnimal();
  // console.log(getAllAnimal());

  // const dispatch = useDispatch();
  // const favoriteCardIds = useSelector(state => state.favoriteCardIds);

  // useEffect(() => {
  //   setIsAddedToFavorites(isUserAuthenticated && favoriteCardIds.includes(id));
  // }, [isUserAuthenticated, favoriteCardIds, id]);

  // const handleHeartIconClick = async () => {
  //   if (!isUserAuthenticated) {
  //     setIsAddedToFavorites(prevState => !prevState);

  //     try {
  //       if (!isAddedToFavorites) {
  //         await dispatch(fetchAddToFavorite(id));
  //       } else {
  //         await dispatch(fetchDeleteFromFavorite(id));
  //       }
  //     } catch (error) {
  //       console.error('Ошибка при выполнении API-запроса:', error);
  //     }
  //   } else {
  //     Notiflix.Notify.warning('You should be authorized');
  //   }
  // };


  // const handleHeartIconClick = () => {
  //   if (isUserAuthenticated) {
  //     setIsAddedToFavorites(prevState => !prevState);
  //   } else {
  //     Notiflix.Notify.warning('You should be authorized');
  //   }
  // };

  const { _id, category, title, location, date, sex, photo } = item;

  const age = calcPetAge(date);
  const normCategory = normalizeCategory(category);

  const getPetAge = dateString => {
    const dateParts = dateString.split('-');
    const dateObject = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
    const today = new Date();
    const timeDiff = today - dateObject;
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const days = Math.floor(timeDiff / millisecondsPerDay);
    const millisecondsPerMonth = 1000 * 60 * 60 * 24 * 30.4375;
    const years = Math.floor(timeDiff / (millisecondsPerMonth * 12));
    const months = Math.floor(
      (timeDiff % (millisecondsPerMonth * 12)) / millisecondsPerMonth
    );

    if (years < 1) {
      if (months < 1) {
        return days + (days === 1 ? ' day' : ' days');
      } else {
        return months + (months === 1 ? ' month' : ' months');
      }
    } else {
      return years + (years === 1 ? ' year' : ' years');
    }
  };

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
            {item.gender}
          </StyledCardButtonBottom>
        </AnimalInfo>
        <StyledComent>{title}</StyledComent>
        <LearnMore>Learn More</LearnMore>
        <RightButtonWrapper>
          <StyledCardButtonRight onClick={onFavorite}>
            {isAddedToFavorites ? (
              <MdFavorite size="24" />
            ) : (
              <MdFavoriteBorder size="24" />
            )}
          </StyledCardButtonRight>
        </RightButtonWrapper>
      </AnimalCard>

    </>
  );
};

export default NoticeCategoryItem;
