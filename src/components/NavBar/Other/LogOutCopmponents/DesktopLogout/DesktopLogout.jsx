import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import exit from '../../../../../images/user/LogOut.svg';
import { DeskLogOutBtn } from './DesktopLogout.styled';

const DeskLogoutComponent = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <DeskLogOutBtn type="button" onClick={handleLogout}>
      <span>Log out</span>
      <img src={exit} alt="exit" />
    </DeskLogOutBtn>
  );
};

export default DeskLogoutComponent;
