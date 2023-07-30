import React, { useEffect } from 'react';
import { LiaPawSolid } from 'react-icons/lia';
import { RxCross2 } from 'react-icons/rx';
import {
  ModalContainer,
  ModalContent,
  CloseButton,
  ModalButton,
  Text,
  Title,
} from './ModalCongrats.styled';


const ModalCongrats = ({ onClose, className = 'Modal content goes here' }) => {
  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <ModalContainer className={className} onClick={handleBackdropClick}>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <RxCross2 />
        </CloseButton>
        <Title>Congrats!</Title>
        <Text>Your registration is success</Text>
        <ModalButton onClick={onClose}>
          Go to profile
          <LiaPawSolid />
        </ModalButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalCongrats;
