import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { isUserLogin } from '../../redux/auth/auth-selectors';
import { useDispatch } from 'react-redux';
// import {
//   fetchAddToFavorite,
//   fetchDeleteFromFavorite,
// } from '../../redux/auth/auth-operations';

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
import Notiflix from 'notiflix';
import { getAllAnimal } from '../../api/notice-api';

export const NoticeCategoryItem = ({ id }) => {
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);
  const isUserAuthenticated = useSelector(isUserLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAnimal());
  }, [dispatch]);

  // const animal = getAllAnimal();
  console.log(getAllAnimal());

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

  const handleHeartIconClick = () => {
    if (isUserAuthenticated) {
      setIsAddedToFavorites(prevState => !prevState);
    } else {
      Notiflix.Notify.warning('You should be authorized');
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
