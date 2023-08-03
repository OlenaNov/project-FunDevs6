import notFoundImg from '../../images/notices/petNotFound.png';
import {
  NoticesNotFoundImage,
  NoticesNotFoundTitle,
} from './NoticesNotFound.styled';

const NoticesNotFound = ({ title }) => {
  return (
    <>
      <NoticesNotFoundTitle>{title}</NoticesNotFoundTitle>
      <NoticesNotFoundImage src={notFoundImg} alt="pet not found" />
    </>
  );
};

export default NoticesNotFound;
