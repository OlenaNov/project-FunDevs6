import { UserMobContainer, UserMobBtn, UserMobName } from './UserMob.styled';
import { Link } from 'react-router-dom';
import user from 'images/user/user.svg';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';

export const UserMob = ({ handleCloseClick }) => {
  const { name } = useSelector(getUser);

  return (
    <UserMobContainer>
      <Link to="/user">
        <UserMobBtn type="button" onClick={handleCloseClick}>
          <img src={user} alt="user" /> <UserMobName>{name}</UserMobName>
        </UserMobBtn>
      </Link>
    </UserMobContainer>
  );
};

export default UserMob;
