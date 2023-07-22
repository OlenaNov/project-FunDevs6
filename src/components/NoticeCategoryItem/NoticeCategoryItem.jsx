import React from 'react';
import {
  AnimalCard,
  AnimalImage,
  AnimalInfo,
  StyledCardButtonBottom,
  CategoryBadge,
  IconWrapper,
  StyledComent,
  LearnMore,
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
        </AnimalCard>
      ))}
    </>
  );
};

export default NoticeCategoryItem;
