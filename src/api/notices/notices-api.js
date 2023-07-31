import instance from 'api/auth-api';

export const getNoticeById = async id => {
  const { data } = await instance.get(`/notices/${id}`);

  return data;
};

export const deleteNoticeById = async id => {
  const res = await instance.delete(`/notices/${id}`);

  return res;
};

export const getSellNotices = async ({ page, limit, query, gender, age }) => {
  const { data } = await instance.get(`/notices/sell`, {
    params: {
      page,
      limit,
      query,
      gender,
      age,
    },
  });

  return data;
};

export const getInGoodHandsNotices = async ({
  page,
  limit,
  query,
  gender,
  age,
}) => {
  const { data } = await instance.get(`/notices/for-free`, {
    params: {
      page,
      limit,
      query,
      gender,
      age,
    },
  });

  return data;
};

export const getLostNotices = async ({ page, limit, query, gender, age }) => {
  const { data } = await instance.get(`/notices/lost-found`, {
    params: {
      page,
      limit,
      query,
      gender,
      age,
    },
  });

  return data;
};

export const getOwnNotices = async ({ page, limit, query, gender, age }) => {
  const { data } = await instance.get(`/notices/myAdds`, {
    params: {
      page,
      limit,
      query,
      gender,
      age,
    },
  });

  return data;
};
