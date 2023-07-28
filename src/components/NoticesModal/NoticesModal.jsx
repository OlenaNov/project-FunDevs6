import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Modal, CloseBtn, CloseBtnIcon } from './NoticesModal.styled';

const modalRoot = document.querySelector('#modal-root');

const NoticeModal = ({ children, onClose }) => {
  const handleClose = useCallback(
    ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleClose);

    return () => {
      window.removeEventListener('keydown', handleClose);
    };
  }, [handleClose]);

  return createPortal(
    <Backdrop onClick={handleClose}>
      <Modal>
        <CloseBtn type="button" onClick={onClose} aria-label="close modal">
          <CloseBtnIcon />
        </CloseBtn>
        {children}
      </Modal>
    </Backdrop>,
    modalRoot
  );
};

export default NoticeModal;
