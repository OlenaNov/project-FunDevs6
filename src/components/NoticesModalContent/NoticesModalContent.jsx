import ReactPropTypes from 'prop-types';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getUser } from 'redux/auth/auth-selectors';

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
import { normalizeCategory } from 'utils';

const NoticesModal = ({ item, onFavorite }) => {
  const user = useSelector(getUser);

  const {
    // _id,
    name,
    date,
    comments,
    type,
    location,
    sex,
    title,
    photo,
    category,
  } = item;

  const normCategory = normalizeCategory(category);

  return (
    <NoticesModalContainer>
      <NoticesModalContent>
        <NoticesContentImageWrapper>
          <NoticesContentImage src={photo} alt={name} />
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
                <NoticesTableValue>{date}</NoticesTableValue>
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
              <tr>
                <NoticesTableLabel>Email:</NoticesTableLabel>
                <NoticesTableValue>
                  <NoticesEmailLink href={`mailto:primer@gmail.com`}>
                    primev@gmail.com
                  </NoticesEmailLink>
                </NoticesTableValue>
              </tr>
              <tr>
                <NoticesTableLabel>Phone:</NoticesTableLabel>
                <NoticesTableValue>
                  <NoticesEmailLink href={`tel:primer@gmail.com`}>
                    0676767677
                  </NoticesEmailLink>
                </NoticesTableValue>
              </tr>
            </tbody>
          </NoticesPetInfoTable>
        </NoticesPetInfo>
      </NoticesModalContent>
      <NoticesComment>{comments}</NoticesComment>
      <NoticesBtnWrapper>
        <NoticesBtn>
          <NoticesBtnLabel>Add To</NoticesBtnLabel>
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
