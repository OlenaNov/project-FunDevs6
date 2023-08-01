import Logout from 'components/Logout/Logout';
import UserData from 'components/UserData/UserData';
import {
  FormTitle,
  UserCardWrap,
  ContainerWrapper,
  ContainerPets,
} from './UserPage.styled';
import Background from 'components/Background/Background';
import Container from 'components/Container/Container';
import PetsData from 'components/PetsData/PetsData';

import Modal from 'components/Modal/Modal';
import ModalContent from 'components/ModalContent/ModalContent';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';

const UserPage = () => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const modalYes = () => {
    dispatch(logout());
  };

  const toggleModal = () => {
    setShowModal(s => !s);
  };

  return (
    <ContainerWrapper>
      <Container>
        <Background />
        <FormTitle>My information:</FormTitle>
        <UserCardWrap>
          <UserData />
          <Logout openModal={() => setShowModal(true)} />
        </UserCardWrap>
        {showModal && (
          <Modal
            onClose={toggleModal}
            children={() => (
              <ModalContent
                title="Already leaving?"
                fnYes={() => modalYes()}
                fnCancel={() => setShowModal(false)}
              />
            )}
          />
        )}
      </Container>
      <ContainerPets>
        <PetsData></PetsData>
      </ContainerPets>
    </ContainerWrapper>
  );
};

export default UserPage;
