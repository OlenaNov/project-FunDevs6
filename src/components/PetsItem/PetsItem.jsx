import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import NoticesModal from 'components/NoticesModal';
import NoticesDeleteModal from 'components/NoticesDeleteModal';

import {
  ContainerPet,
  Img,
  ContainerPetWrapper,
  ContainerPetInfo,
  InfoPet,
  InfoPetTitle,
  IconWrapper,
  // Title,
} from './PetsItem.styled';
import { AiOutlineDelete } from 'react-icons/ai';
import { normilizeBirthdate } from 'utils';

const PetsItem = ({ pet, onDelete }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { _id, avatarURL, name, date, type, comments } = pet;

  const normBirthdate = normilizeBirthdate(date);
  return (
    <>
      <ContainerPet>
        <ContainerPetWrapper>
          <IconWrapper type="button" onClick={() => setShowDeleteModal(true)}>
            <AiOutlineDelete size={24} color="#54ADFF" />
          </IconWrapper>
          <Img src={avatarURL} />
          <ContainerPetInfo>
            <InfoPet>
              <InfoPetTitle>Name:{name}</InfoPetTitle>
            </InfoPet>
            <InfoPet>
              <InfoPetTitle>Date of birth:{normBirthdate}</InfoPetTitle>
            </InfoPet>
            <InfoPet>
              <InfoPetTitle>Type:{type}</InfoPetTitle>
            </InfoPet>
            <InfoPet>
              <InfoPetTitle>Comments: {comments}</InfoPetTitle>
            </InfoPet>
          </ContainerPetInfo>
        </ContainerPetWrapper>
        <CSSTransition
          in={showDeleteModal}
          timeout={400}
          classNames="node"
          unmountOnExit
        >
          <NoticesModal onClose={() => setShowDeleteModal(false)}>
            <NoticesDeleteModal
              modalTitle="Delete this pet?"
              title={name}
              onCloseModal={() => setShowDeleteModal(false)}
              onDeleteNotices={() => onDelete(_id)}
            />
          </NoticesModal>
        </CSSTransition>
      </ContainerPet>
    </>
  );
};

export default PetsItem;
