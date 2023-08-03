import Background from 'components/Background/Background';
import AddPetForm from '../../components/AddPetForm/AddPetForm';
import Container from 'components/Container/Container';

const addPetPage = () => {
  return (
    <>
      <Background />
      <Container>
        <AddPetForm />
      </Container>
    </>
  );
};

export default addPetPage;
