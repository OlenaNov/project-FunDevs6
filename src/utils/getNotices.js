import {
  getSellNotices,
  getLostNotices,
  getInGoodHandsNotices,
  getOwnNotices,
} from 'api/notices/notices-api';
import { getFavoriteNotices } from 'api/notices/favorite-api';

export const getNotices = async params => {
  params.age = getAgeParam(params.age);

  switch (params.category) {
    case 'sell':
      return await getSellNotices(params);

    case 'lost-found':
      return await getLostNotices(params);

    case 'for-free':
      return await getInGoodHandsNotices(params);

    case 'favorite':
      return await getFavoriteNotices(params);

    case 'own':
      return await getOwnNotices(params);

    default:
      return [];
  }
};

const getAgeParam = age => {
  switch (age) {
    case '3m-12m':
      return '3m-12m';

    case '1y':
      return '1y';

    case '2y':
      return '2y';

    default:
      return;
  }
};
