import PetsItem from 'components/PetsItem/PetsItem';
import {
  Title,
  Container,
  AddButton,
  IconWrapper,
  ContainerMain,
} from './PetsList.styled';
import { AiOutlinePlus } from 'react-icons/ai';

const PetsList = () => {
  return (
    <>
      <ContainerMain>
        <Container>
          <Title>My pets:</Title>
          <AddButton to="/add-pet">
            Add pet
            <IconWrapper>
              <AiOutlinePlus size={24} color="white" />
            </IconWrapper>
          </AddButton>
        </Container>
        <PetsItem />
      </ContainerMain>
    </>
  );
};

export default PetsList;
