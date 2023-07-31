

import { IconExit, LogOutBtn } from './Logout.styled';

const Logout = ({ openModal }) => {


  const handleLogout = () => {
    console.log("Open Modal");
    openModal();
  };

  return (
    <LogOutBtn type="button" onClick={handleLogout}>
      <IconExit />
      <span>Log Out</span>
    </LogOutBtn>
  );
};

export default Logout;
