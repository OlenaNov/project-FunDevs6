import Background from 'components/Background/Background';
import Container from 'components/Container/Container';
import Main from 'components/Main';
// import Modal from 'components/Modal/Modal';
// import ModalContent from 'components/ModalContent/ModalContent';
// import { useState } from 'react';

export const MainPage = () => {
  // const [showModal, setShowModal] = useState(true);

  // const toggleModal = () => {
  //   setShowModal(s => !s);
  // };

  return (
<>
<Background />
<Container>
      <Main />
      {/* {showModal && (
        <Modal
          onClose={toggleModal}
          children={() => (
            <ModalContent
              title="Already leaving?"
              fnYes={() => console.log('Yes')}
              fnCancel={() => console.log('Cancel')}
            />
          )}
        />
      )} */}
    </Container>
</>
  );
};

export default MainPage;
