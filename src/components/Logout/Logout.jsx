import { LogOutBtn } from 'components/UserCard/UserCard.styled';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { IconExit } from './Logout.styled';

const Logout = ({ onClick }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    if (onClick) {
      onClick();
    }
  };

  return (
    <LogOutBtn type="button" onClick={handleLogout}>
      <IconExit />
      <span>Log out</span>
    </LogOutBtn>
  );
};

export default Logout;
