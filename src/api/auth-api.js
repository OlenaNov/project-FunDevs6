import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://back-end-yourpet.onrender.com/api',
});

export const setToken = token => {
  if (token) {
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.authorization = '';
};

export const signup = async data => {
  const { data: result } = await instance.post('/users/register', data);
  setToken(result.token);
  return result;
};

export const login = async data => {
  const { data: result } = await instance.post('/users/login', data);
  setToken(result.token);
  return result;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const updateUser = async (data, token) => {
  try {
    console.log(444, data);
    const { data: result } = await instance.patch('/users/', data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return result;
  } catch (error) {
    console.error(error);
    throw error.message;
  }
};

export const updateAvatar = async data => {
  try {
    const { data: result } = await instance.patch('/users/avatars', data);
    return result;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  const { data } = await instance.post('/users/logout');
  setToken();
  return data;
};

export const addToFavorite = async id => {
  const { data: result } = await instance.post(`/notices/favorites/${id}`);
  return result;
};

export const deleteFromFavorite = async id => {
  const data = await instance.delete(`/notices/favorites/${id}`);

  return data;
};

export default instance;
