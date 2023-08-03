import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Main } from './Layout.styled';
import Loader from 'components/Loader';
import NavBar from 'components/NavBar/NavBar';

import { logout } from 'redux/auth/auth-operations';
import Modal from 'components/Modal/Modal';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import ModalContent from 'components/ModalContentLeaving/ModalContentLeaving';

export const Layout = () => {
  
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const modalYes = () => {
    dispatch(logout());
    setShowModal(false);
  };

  const toggleModal = () => {
    setShowModal(s => !s);
  };

  return (
    <>
      <NavBar onOpen={() => setShowModal(true)} />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
          {showModal && 
        <Modal 
          onClose={toggleModal} 
          children={() => <ModalContent title="Already leaving?" fnYes={() => modalYes()} fnCancel={() => setShowModal(false)} /> } />}
        </Suspense>
      </Main>
    </>
  );
};

export default Layout;
