import notFoundImg from '../../images/notices/petNotFound.png';
import {
  NoticesNotFoundImage,
  NoticesNotFoundTitle,
} from './NoticesNotFound.styled';

const NoticesNotFound = () => {
  return (
    <>
      <NoticesNotFoundTitle>
        No animals were found for your request
      </NoticesNotFoundTitle>
      <NoticesNotFoundImage src={notFoundImg} alt="pet not found" />;
    </>
  );
};

export default NoticesNotFound;
