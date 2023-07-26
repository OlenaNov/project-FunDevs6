import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Logout from 'components/Logout/Logout';
import UserData from 'components/UserData/UserData';
import { FormTitle, UserCardWrap } from './UserPage.styled';
import { logout } from 'redux/auth/auth-operations';

const UserPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <>
      <FormTitle>My information:</FormTitle>
      <UserCardWrap>
        <UserData />
        <Logout onClick={handleLogout} />
      </UserCardWrap>
    </>
  );
};

export default UserPage;
