import { IconExit, LogOutBtn } from './Logout.styled';

const Logout = ({ openModal }) => {


  const handleLogout = () => {
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
