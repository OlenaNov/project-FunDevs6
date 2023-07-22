import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFiltersBtn from '../../components/NoticesFiltersBtn/NoticesFiltersBtn';
import NoticesAddPetBtn from '../../components/NoticesAddPetBtn/NoticesAddPetBtn';
// import NoticeCategoryItem from '../../components/NoticeCategoryItem/NoticeCategoryItem';
import NoticesCategoriesList from '../../components/NoticesCategoriesList/NoticesCategoriesList';

import {
  NoticeFilterContainer,
  NoticesPageContainer,
  NoticesPageContainerFilterAdd,
  Title,
} from './NoticesPage.styled';

export const NoticesPage = () => {
  return (
    <div>
      <NoticesPageContainer>
      <Title>Find your favorite pet</Title>
      <NoticesSearch />
      <NoticeFilterContainer>
        <NoticesCategoriesNav />
        <NoticesPageContainerFilterAdd>
          <NoticesFiltersBtn />
          <NoticesAddPetBtn />
        </NoticesPageContainerFilterAdd>
      </NoticesPageContainer>
      <NoticesCategoriesList />
      </NoticeFilterContainer>
    </NoticesPageContainer>
    </div>
  );
};

export default NoticesPage;
