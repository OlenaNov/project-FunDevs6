import exit from '../../../../../images/user/LogOut.svg';
import { TabLogOutBtn } from './TabLogout.styled';

const TabLogoutComponent = ({ openModal }) => {

  const handleLogout = () => {
    openModal();
  };

  return (
    <TabLogOutBtn type="button" onClick={handleLogout}>
      <span>Log out</span>
      <img src={exit} alt="exit" />
    </TabLogOutBtn>
  );
};

export default TabLogoutComponent;
