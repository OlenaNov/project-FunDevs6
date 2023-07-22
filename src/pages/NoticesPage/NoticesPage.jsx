import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFiltersBtn from '../../components/NoticesFiltersBtn/NoticesFiltersBtn';
import NoticesAddPetBtn from '../../components/NoticesAddPetBtn/NoticesAddPetBtn';
import {
  NoticeFilterContainer,
  NoticesPageContainer,
  NoticesPageContainerFilterAdd,
  Title,
} from './NoticesPage.styled';

export const NoticesPage = () => {
  return (
    <NoticesPageContainer>
      <Title>Find your favorite pet</Title>
      <NoticesSearch />
      <NoticeFilterContainer>
        <NoticesCategoriesNav />
        <NoticesPageContainerFilterAdd>
          <NoticesFiltersBtn />
          <NoticesAddPetBtn />
        </NoticesPageContainerFilterAdd>
      </NoticeFilterContainer>
    </NoticesPageContainer>
  );
};

export default NoticesPage;
