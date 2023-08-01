
import Background from "components/Background/Background";
import Container from "components/Container/Container";
import MainDefault from "components/MainDefault";
import Modal from "components/Modal/Modal";
import ModalContent from "components/ModalContent/ModalContent";
import { useState } from "react";

export const MainPage = () => {

  const [showModal, setShowModal] = useState(true);

  const toggleModal = () => {
    setShowModal(s => !s);
  };

 return (
  <Container>
    <Background />
    <MainDefault />
    {showModal && 
        <Modal 
          onClose={toggleModal} 
          children={() => <ModalContent title="Already leaving?" fnYes={() => console.log("Yes")} fnCancel={() => console.log("Cancel")} /> } />}
  </Container>
  );
};

export default MainPage;