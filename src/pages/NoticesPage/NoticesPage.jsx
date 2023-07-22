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
      <Title>Find your favorite pet</Title>
      <NoticesSearch />
      <NoticesPageContainer>
        <NoticeFilterContainer>
          <NoticesCategoriesNav />
          <NoticesPageContainerFilterAdd>
            <NoticesFiltersBtn />
            <NoticesAddPetBtn />
          </NoticesPageContainerFilterAdd>
        </NoticeFilterContainer>
      </NoticesPageContainer>
      <NoticesCategoriesList />
    </div>
  );
};

export default NoticesPage;
