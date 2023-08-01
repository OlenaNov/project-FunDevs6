import { AiOutlineDelete } from 'react-icons/ai';
// import { getPets } from '../../redux/pets/pets-operation';
import {
  ContainerPet,
  Img,
  ContainerPetWrapper,
  ContainerPetInfo,
  InfoPet,
  InfoPetTitle,
  IconWrapper,
} from './PetsItem.styled';

const PetsItem = () => {
  return (
    <>
      <ContainerPet>
        <ContainerPetWrapper>
          <IconWrapper>
            <AiOutlineDelete size={24} color="#54ADFF" />
          </IconWrapper>
          <Img src="https://res.cloudinary.com/dtsmejh5h/image/upload/v1690890532/pets/64c873bf6e5e1a8e529845ad_monkey.jpg.jpg" />
          <ContainerPetInfo>
            <InfoPet>
              <InfoPetTitle>Name:</InfoPetTitle>
            </InfoPet>
            <InfoPet>
              <InfoPetTitle>Date of birth:</InfoPetTitle>
            </InfoPet>
            <InfoPet>
              <InfoPetTitle>Type:</InfoPetTitle>
            </InfoPet>
            <InfoPet>
              <InfoPetTitle>Comments:</InfoPetTitle>
            </InfoPet>
          </ContainerPetInfo>
        </ContainerPetWrapper>
      </ContainerPet>
    </>
  );
};

export default PetsItem;
