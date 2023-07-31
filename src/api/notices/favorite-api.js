import instance from 'api/auth-api';

export const getFavoriteNotices = async ({ query, gender, age }) => {
  const { data } = await instance.get(`/notices/favorite`, {
    params: {
      query,
      gender,
      age,
    },
  });

  return data;
};

export const addFavoriteNotice = async id => {
  const { data } = await instance.post(`/notices/favorite/${id}`);

  return data;
};

export const deleteFavoriteNotice = async id => {
  const { data } = await instance.delete(`/notices/favorite/${id}`);

  return data;
};
