import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getPets, deletePet } from '../../redux/pets/pets-operation';
import { isUserLogin, getToken } from '../../redux/auth/auth-selectors';

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
  const dispatch = useDispatch();
  const pets = useSelector(state => state.pets.pets);
  const isLoggedIn = useSelector(isUserLogin);
  const token = useSelector(getToken);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      dispatch(getPets()).then(() => setIsLoading(false));
    }
  }, [dispatch, isLoggedIn, token]);

  const handleDeletePet = petId => {
    setIsLoading(true);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    dispatch(deletePet(petId)).then(() => setIsLoading(false));
  };

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getPets(token));
    }
  }, [dispatch, isLoggedIn, token]);

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
        {!isLoading &&
          pets.map(pet => (
            <PetsItem key={pet._id} pet={pet} onDelete={handleDeletePet} />
          ))}
      </ContainerMain>
    </>
  );
};

export default PetsList;
