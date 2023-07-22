import NoticesCategoriesNav from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFiltersBtn from '../../components/NoticesFiltersBtn/NoticesFiltersBtn';
import NoticesAddPetBtn from '../../components/NoticesAddPetBtn/NoticesAddPetBtn';
// import NoticeCategoryItem from '../../components/NoticeCategoryItem/NoticeCategoryItem';
import NoticesCategoriesList from '../../components/NoticesCategoriesList/NoticesCategoriesList';

import {
  NoticesPageContainer,
  NoticesPageContainerFilterAdd,
} from './NoticesPage.styled';

export const NoticesPage = () => {
  return (
    <div>
      <NoticesPageContainer>
        <NoticesCategoriesNav />
        <NoticesPageContainerFilterAdd>
          <NoticesFiltersBtn />
          <NoticesAddPetBtn />
        </NoticesPageContainerFilterAdd>
      </NoticesPageContainer>
      <NoticesCategoriesList />
    </div>
  );
};

export default NoticesPage;
