import Logout from 'components/Logout/Logout';
import UserData from 'components/UserData/UserData';
import { FormTitle, UserCardWrap } from './UserPage.styled';
import Background from 'components/Background/Background';
import Container from 'components/Container/Container';
import PetsData from 'components/PetsData/PetsData';
import ModalCongrats from 'components/ModalCongrats';
import Modal from 'components/Modal/Modal';
import ModalContent from 'components/ModalContent/ModalContent';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';

const UserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [showModalContent, setShowModalContent] = useState(false);

  useEffect(() => {
    if (location.state?.from === '/register') {
      setIsRegistered(true);
      setShowModal(true);
    }
  }, [location.state?.from]);

  // const modalYes = () => {
  //   dispatch(logout());
  // };

  const modalYes = () => {
    setShowModalContent(true);
    dispatch(logout());
    navigate('/');
  };

  const toggleModal = () => {
    setShowModal(s => !s);
  };

  const closeModalCongrats = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <Background />
      <FormTitle>My information:</FormTitle>
      <UserCardWrap>
        <UserData />
        {/* <Logout openModal={() => setShowModal(true)} /> */}
        <Logout openModal={modalYes} />
      </UserCardWrap>
      {isRegistered && showModal && (
        <ModalCongrats onClose={closeModalCongrats} />
      )}
      <PetsData></PetsData>

      {showModalContent && (
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
  );
};

export default UserPage;
