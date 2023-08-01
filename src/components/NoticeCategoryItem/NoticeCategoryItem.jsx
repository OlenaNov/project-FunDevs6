import { useSelector } from 'react-redux';
import { getUser, isUserLogin } from 'redux/auth/auth-selectors';
import { useState } from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import {
  MdOutlineAccessTime,
  MdMale,
  MdFemale,
  MdFavoriteBorder,
  MdFavorite,
} from 'react-icons/md';

import NoticesModal from 'components/NoticesModal';
import NoticesModalContent from 'components/NoticesModalContent';
import NoticesDeleteModal from 'components/NoticesDeleteModal';
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
  RightButtonsWrapper,
  DeleteBtn,
  DeleteBtnIcon,
} from './NoticeCategoryItem.styled';
import { calcPetAge, normalizeCategory } from 'utils';

export const NoticeCategoryItem = ({ item, onDelete, onFavorite }) => {
  const [showLearnMoreModal, setShowLearnMoreModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const isLogin = useSelector(isUserLogin);
  const user = useSelector(getUser);

  const { _id, category, title, location, date, sex, avatarURL, owner } = item;

  const age = calcPetAge(date);
  const normCategory = normalizeCategory(category);

  const favorite = isLogin && user.favorite.includes(_id);

  const isOwnPet = owner?._id === user.id;

  return (
    <>
      <AnimalCard>
        <CategoryBadge>{normCategory}</CategoryBadge>
        <AnimalImage src={avatarURL} alt={title} />
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
        <LearnMore onClick={() => setShowLearnMoreModal(true)}>
          Learn More
        </LearnMore>
        <RightButtonsWrapper>
          <StyledCardButtonRight onClick={() => onFavorite(_id)}>
            {favorite ? (
              <MdFavorite size="24" />
            ) : (
              <MdFavoriteBorder size="24" />
            )}
          </StyledCardButtonRight>
          {isOwnPet && (
            <DeleteBtn type="button" onClick={() => setShowDeleteModal(true)}>
              <DeleteBtnIcon />
            </DeleteBtn>
          )}
        </RightButtonsWrapper>
      </AnimalCard>
      {showLearnMoreModal && (
        <NoticesModal onClose={() => setShowLearnMoreModal(false)}>
          <NoticesModalContent item={item} onFavorite={onFavorite} />
        </NoticesModal>
      )}
      {showDeleteModal && (
        <NoticesModal onClose={() => setShowDeleteModal(false)}>
          <NoticesDeleteModal
            title={title}
            onCloseModal={() => setShowDeleteModal(false)}
            onDeleteNotices={() => onDelete(_id)}
          />
        </NoticesModal>
      )}
    </>
  );
};

export default NoticeCategoryItem;
