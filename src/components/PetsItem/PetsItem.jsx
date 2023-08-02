import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getPets } from '../../redux/pets/pets-operation';
import { isUserLogin, getToken } from '../../redux/auth/auth-selectors';
import {
  ContainerPet,
  Img,
  ContainerPetWrapper,
  ContainerPetInfo,
  InfoPet,
  InfoPetTitle,
  IconWrapper,
  Title,
} from './PetsItem.styled';
import { AiOutlineDelete } from 'react-icons/ai';

const PetsItem = () => {
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

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     dispatch(getPets(token));
  //   }
  // }, [dispatch, isLoggedIn, token]);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {/* {pets && pets.length > 0 ? ( */}
            <ContainerPet>
              <ContainerPetWrapper>
                <IconWrapper>
                  <AiOutlineDelete size={24} color="#54ADFF" />
                </IconWrapper>
                <Img src={pets.avatarURL} />
                <ContainerPetInfo>
                  <InfoPet>
                    <InfoPetTitle>Name:{pets.name}</InfoPetTitle>
                  </InfoPet>
                  <InfoPet>
                    <InfoPetTitle>Date of birth:{pets.data}</InfoPetTitle>
                  </InfoPet>
                  <InfoPet>
                    <InfoPetTitle>Type:{pets.type}</InfoPetTitle>
                  </InfoPet>
                  <InfoPet>
                    <InfoPetTitle>Comments: {pets.comments}</InfoPetTitle>
                  </InfoPet>
                </ContainerPetInfo>
              </ContainerPetWrapper>
            </ContainerPet>
          {/* ) : (
            <Title>No animals to start you need to add them</Title>
          )} */}
        </>
      )}
    </>
  );
};

export default PetsItem;
