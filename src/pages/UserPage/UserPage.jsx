import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Logout from 'components/Logout/Logout';
import UserData from 'components/UserData/UserData';
import { FormTitle, UserCardWrap } from './UserPage.styled';
import { logout } from 'redux/auth/auth-operations';
import Background from 'components/Background/Background';
import Container from 'components/Container/Container';

const UserPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <Container>
      <Background />
      <FormTitle>My information:</FormTitle>
      <UserCardWrap>
        <UserData />
        <Logout onClick={handleLogout} />
      </UserCardWrap>
    </Container>
  );
};

export default UserPage;
