import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getPets, deletePet } from '../../redux/pets/pets-operation';
import { isUserLogin } from '../../redux/auth/auth-selectors';

import PetsItem from 'components/PetsItem/PetsItem';
import {
  Title,
  Container,
  AddButton,
  IconWrapper,
  ContainerMain,
} from './PetsList.styled';
import { AiOutlinePlus } from 'react-icons/ai';
import NoticesNotFound from 'components/NoticesNotFound';

const PetsList = () => {
  const dispatch = useDispatch();
  const pets = useSelector(state => state.pets.pets);
  const isLoggedIn = useSelector(isUserLogin);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true);
      dispatch(getPets()).finally(() => setIsLoading(false));
    }
  }, [dispatch, isLoggedIn]);

  const handleDeletePet = petId => {
    setIsLoading(true);
    dispatch(deletePet(petId)).then(() => setIsLoading(false));
    dispatch(getPets());
  };

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
        {pets.length > 0 &&
          pets.map(pet => (
            <PetsItem key={pet._id} pet={pet} onDelete={handleDeletePet} />
          ))}
        {!isLoading && pets.length === 0 && (
          <NoticesNotFound title={'You can add your pets here!'} />
        )}
      </ContainerMain>
    </>
  );
};

export default PetsList;
