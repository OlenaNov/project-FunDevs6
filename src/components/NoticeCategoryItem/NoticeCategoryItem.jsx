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
import { getAllAnimal } from '../../redux/notices/notices-operations';

export const NoticeCategoryItem = () => {
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);
  const isUserAuthenticated = useSelector(isUserLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAnimal());
  }, [dispatch]);

  const animals = useSelector(state => state.notices.animals.pets);

  const handleHeartIconClick = () => {
    if (isUserAuthenticated) {
      setIsAddedToFavorites(prevState => !prevState);
    } else {
      Notiflix.Notify.warning('You should be authorized');
    }
  };

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
      {animals
        ? animals.map(item => (
            <AnimalCard key={item.id}>
              <CategoryBadge>{item.category}</CategoryBadge>
              <AnimalImage src={item.photo} alt={item.title} />
              <AnimalInfo>
                <StyledCardButtonBottom>
                  <IconWrapper>
                    <HiOutlineLocationMarker size={24} />
                  </IconWrapper>
                  {item.location}
                </StyledCardButtonBottom>

                <StyledCardButtonBottom>
                  <IconWrapper>
                    <MdOutlineAccessTime size={24} />
                  </IconWrapper>
                  {getPetAge(item.date)}
                </StyledCardButtonBottom>

                <StyledCardButtonBottom>
                  <IconWrapper>
                    {item.sex === 'male' ? (
                      <MdMale size="24" />
                    ) : (
                      <MdFemale size="24" />
                    )}
                  </IconWrapper>
                  {item.sex}
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
          ))
        : null}
    </>
  );
};

export default NoticeCategoryItem;
