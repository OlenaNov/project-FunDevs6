import Logout from 'components/Logout/Logout';
import UserData from 'components/UserData/UserData';
import { FormTitle, UserCardWrap } from './UserPage.styled';
import Background from 'components/Background/Background';
import Container from 'components/Container/Container';
import PetsData from 'components/PetsData/PetsData';

const UserPage = () => {
  return (
    <Container>
      <Background />
      <FormTitle>My information:</FormTitle>
      <UserCardWrap>
        <UserData />
        <Logout />
      </UserCardWrap>
      <PetsData></PetsData>
    </Container>
  );
};

export default UserPage;
