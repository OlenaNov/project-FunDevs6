import exit from '../../../../../images/user/LogOut.svg';
import { MobLogOutBtn } from './MobLogout.styled';

export const MobLogoutComponent = ({ openModal }) => {

  const handleLogout = () => {
    openModal();
  };

  return (
    <MobLogOutBtn type="button" onClick={handleLogout}>
      <span>Log out</span>
      <img src={exit} alt="exit" />
    </MobLogOutBtn>
  );
};

export default MobLogoutComponent;
