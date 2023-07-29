import axios from 'axios';

export const getFavoriteNotices = async ({ query, gender, age }) => {
  const { data } = await axios.get(`/notice/favorite`, {
    params: {
      query,
      gender,
      age,
    },
  });

  return data;
};

export const addFavoriteNotice = async id => {
  const { data } = await axios.post(`/notice/favorite/${id}`);

  return data;
};

export const deleteFavoriteNotice = async id => {
  const { data } = await axios.delete(`/notice/favorite/${id}`);

  return data;
};
