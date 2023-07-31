import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import exit from '../../../../../images/user/LogOut.svg';
import { TabLogOutBtn } from './TabLogout.styled';

const TabLogoutComponent = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <TabLogOutBtn type="button" onClick={handleLogout}>
      <span>Log out</span>
      <img src={exit} alt="exit" />
    </TabLogOutBtn>
  );
};

export default TabLogoutComponent;
