import {
  DeleteModalTitle,
  DeleteModalWrapper,
  DeleteModalText,
  DeleteModalButtonWrapper,
  DeleteModalCancelBtn,
  DeleteModalApproveBtn,
  NoticesDeleteModalIcon,
} from './NoticesDeleteModal.styled';

const NoticesDeleteModal = ({ onCloseModal, onDeleteNotices, title }) => {
  return (
    <DeleteModalWrapper>
      <DeleteModalTitle>Delete Advertisement?</DeleteModalTitle>
      <DeleteModalText>
        Are you sure you want to delete <span>"{title}"</span>? You can`t undo
        this action.
      </DeleteModalText>
      <DeleteModalButtonWrapper>
        <DeleteModalCancelBtn onClick={onCloseModal}>
          <span>Cancel</span>
        </DeleteModalCancelBtn>
        <DeleteModalApproveBtn onClick={onDeleteNotices}>
          <span>Yes</span>
          <NoticesDeleteModalIcon />
        </DeleteModalApproveBtn>
      </DeleteModalButtonWrapper>
    </DeleteModalWrapper>
  );
};

export default NoticesDeleteModal;
