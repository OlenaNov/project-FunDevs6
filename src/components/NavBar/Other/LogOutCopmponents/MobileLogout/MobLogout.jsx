import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import exit from '../../../../../images/user/LogOut.svg';
import { MobLogOutBtn } from './MobLogout.styled';

export const MobLogoutComponent = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <MobLogOutBtn type="button" onClick={handleLogout}>
      <span>Log out</span>
      <img src={exit} alt="exit" />
    </MobLogOutBtn>
  );
};

export default MobLogoutComponent;
