import axios from 'axios';

export const getOwnPets = async () => {
  const { data } = await axios.get('/ownpets');

  return data;
};

export const addOwnPet = async () => {
  const { data } = await axios.post('/ownpets');

  return data;
};

export const deleteOwnPet = async id => {
  const { data } = await axios.delete(`/ownpets/${id}`);

  return data;
};
