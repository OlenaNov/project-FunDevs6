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

const PetsItem = ({ pet, onDelete }) => {
  const { _id, avatarURL, name, data, type, comments } = pet;
  return (
    <>
      {/* {pets && pets.length > 0 ? ( */}
      <ContainerPet>
        <ContainerPetWrapper>
          <IconWrapper onClick={() => onDelete(_id)}>
            <AiOutlineDelete size={24} color="#54ADFF" />
          </IconWrapper>
          <Img src={avatarURL} />
          <ContainerPetInfo>
            <InfoPet>
              <InfoPetTitle>Name:{name}</InfoPetTitle>
            </InfoPet>
            <InfoPet>
              <InfoPetTitle>Date of birth:{data}</InfoPetTitle>
            </InfoPet>
            <InfoPet>
              <InfoPetTitle>Type:{type}</InfoPetTitle>
            </InfoPet>
            <InfoPet>
              <InfoPetTitle>Comments: {comments}</InfoPetTitle>
            </InfoPet>
          </ContainerPetInfo>
        </ContainerPetWrapper>
      </ContainerPet>
    </>
  );
};

export default PetsItem;
