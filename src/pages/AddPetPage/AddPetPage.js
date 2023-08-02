import { useEffect } from 'react';
import AddPetForm from '../../components/AddPet/AddPetForm';
import Container from 'components/Container/Container';
import Background from 'components/Background/Background';

const AddPetPage = () => {
  useEffect(() => {
    document.title = 'YourPet | Add pet';
  });

  return (
    <Container>
      <Background />
      <AddPetForm />
    </Container>
  );
};

export default AddPetPage;
