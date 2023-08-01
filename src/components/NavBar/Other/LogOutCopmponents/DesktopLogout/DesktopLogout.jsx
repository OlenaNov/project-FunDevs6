import exit from '../../../../../images/user/LogOut.svg';
import { DeskLogOutBtn } from './DesktopLogout.styled';

const DeskLogoutComponent = ({ openModal }) => {
  
  const handleLogout = () => {
    openModal();
  };

  return (
    <DeskLogOutBtn type="button" onClick={handleLogout}>
      <span>Log out</span>
      <img src={exit} alt="exit" />
    </DeskLogOutBtn>
  );
};

export default DeskLogoutComponent;
