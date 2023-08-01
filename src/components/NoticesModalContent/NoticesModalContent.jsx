// import ReactPropTypes from 'prop-types';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getUser, isUserLogin } from 'redux/auth/auth-selectors';

import {
  NoticesContentImage,
  NoticesContentImageWrapper,
  NoticesModalContainer,
  NoticesModalContent,
  NoticesContentCategory,
  NoticesPetInfo,
  NoticesPetInfoTitle,
  NoticesPetInfoTable,
  NoticesTableLabel,
  NoticesTableValue,
  NoticesEmailLink,
  NoticesComment,
  NoticesBtnWrapper,
  NoticesBtn,
  NoticesBtnLabel,
  NoticesContactLink,
  HeartIcon,
} from './NoticesModal.styled';
import { normalizeCategory, normilizeBirthdate } from 'utils';

const NoticesModal = ({ item, onFavorite }) => {
  const user = useSelector(getUser);
  const isLogin = useSelector(isUserLogin);

  const {
    _id,
    name,
    date,
    comments,
    type,
    location,
    sex,
    title,
    avatarURL,
    category,
    owner,
    price,
  } = item;

  const normCategory = normalizeCategory(category);
  const normBirthdate = normilizeBirthdate(date);
  const favorite = isLogin && user.favorite.includes(_id);

  return (
    <NoticesModalContainer>
      <NoticesModalContent>
        <NoticesContentImageWrapper>
          <NoticesContentImage src={avatarURL} alt={name} />
          <NoticesContentCategory>{normCategory}</NoticesContentCategory>
        </NoticesContentImageWrapper>
        <NoticesPetInfo>
          <NoticesPetInfoTitle>{title}</NoticesPetInfoTitle>
          <NoticesPetInfoTable>
            <tbody>
              <tr>
                <NoticesTableLabel>Name:</NoticesTableLabel>
                <NoticesTableValue>{name}</NoticesTableValue>
              </tr>
              <tr>
                <NoticesTableLabel>Birthday:</NoticesTableLabel>
                <NoticesTableValue>{normBirthdate}</NoticesTableValue>
              </tr>
              <tr>
                <NoticesTableLabel>Type:</NoticesTableLabel>
                <NoticesTableValue>{type}</NoticesTableValue>
              </tr>
              <tr>
                <NoticesTableLabel>Place:</NoticesTableLabel>
                <NoticesTableValue>{location}</NoticesTableValue>
              </tr>
              <tr>
                <NoticesTableLabel>The sex:</NoticesTableLabel>
                <NoticesTableValue>{sex}</NoticesTableValue>
              </tr>
              {price && (
                <tr>
                  <NoticesTableLabel>Price:</NoticesTableLabel>
                  <NoticesTableValue>{price}</NoticesTableValue>
                </tr>
              )}
              <tr>
                <NoticesTableLabel>Email:</NoticesTableLabel>
                <NoticesTableValue>
                  <NoticesEmailLink href={`mailto:${owner.email}`}>
                    {owner.email}
                  </NoticesEmailLink>
                </NoticesTableValue>
              </tr>
              {owner?.phone && (
                <tr>
                  <NoticesTableLabel>Phone:</NoticesTableLabel>
                  <NoticesTableValue>
                    <NoticesEmailLink href={`tel:${owner.phone}`}>
                      {owner.phone}
                    </NoticesEmailLink>
                  </NoticesTableValue>
                </tr>
              )}
            </tbody>
          </NoticesPetInfoTable>
        </NoticesPetInfo>
      </NoticesModalContent>
      <NoticesComment>{comments}</NoticesComment>
      <NoticesBtnWrapper>
        <NoticesBtn onClick={() => onFavorite(_id)}>
          <NoticesBtnLabel>
            {favorite ? 'Remove from' : 'Add to'}
          </NoticesBtnLabel>
          <HeartIcon />
        </NoticesBtn>
        <NoticesContactLink href="mailto:primer@gmail.com">
          <span>Contact</span>
        </NoticesContactLink>
      </NoticesBtnWrapper>
    </NoticesModalContainer>
  );
};

export default NoticesModal;
