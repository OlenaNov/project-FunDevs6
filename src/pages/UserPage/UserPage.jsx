import Logout from 'components/Logout/Logout';
import UserData from 'components/UserData/UserData';
import {
  FormTitle,
  UserCardWrap,
  ContainerWrapper,
  ContainerPets,
  ContainerUser,
} from './UserPage.styled';
import Background from 'components/Background/Background';
import Container from 'components/Container/Container';
import PetsData from 'components/PetsData/PetsData';

import ModalCongrats from 'components/ModalCongrats';
import Modal from 'components/Modal/Modal';
import ModalContent from 'components/ModalContentLeaving/ModalContentLeaving';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { current, logout } from 'redux/auth/auth-operations';
import { CSSTransition } from 'react-transition-group';
import { ToastContainer } from 'react-toastify';
import Loader from 'components/Loader/Loader';

const UserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [showModalContent, setShowModalContent] = useState(false);
  const isLoading = useSelector(state => state.auth.isLoading);

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

  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      <Background />
      <Container>
        <ContainerWrapper>
          <ContainerUser>
            <FormTitle>My information:</FormTitle>
            <UserCardWrap>
              {isLoading ? (
                <Loader />
              ) : (
                <>
                  <UserData toggleEdit={toggleEdit} isEditing={isEditing} />
                  {!isEditing && <Logout openModal={modalYes} />}
                </>
              )}
            </UserCardWrap>
          </ContainerUser>

          <ContainerPets>
            <PetsData />
          </ContainerPets>

          {isRegistered && showModal && (
            <ModalCongrats onClose={closeModalCongrats} />
          )}

          <CSSTransition
            in={showModalContent}
            timeout={400}
            classNames="node"
            unmountOnExit
          >
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
          </CSSTransition>
        </ContainerWrapper>
      </Container>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </>
  );
};

export default UserPage;
