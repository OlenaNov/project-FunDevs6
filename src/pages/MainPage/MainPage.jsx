
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
  <>
    <MainDefault />
    {showModal && 
        <Modal 
          onClose={toggleModal} 
          children={() => <ModalContent title="Already leaving?" fnYes={() => console.log("Yes")} fnCancel={() => console.log("Cancel")} /> } />}
  </>
  );
};

export default MainPage;