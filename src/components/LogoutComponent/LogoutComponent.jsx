import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { IconExit, LogOutBtn } from './LogoutComponent.styled';

const LogoutComponent = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <LogOutBtn type="button" onClick={handleLogout}>
      <span>Log out</span>
      <IconExit />
    </LogOutBtn>
  );
};

export default LogoutComponent;
