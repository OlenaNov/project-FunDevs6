import NoticesCategoriesNav from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFiltersBtn from '../../components/NoticesFiltersBtn/NoticesFiltersBtn';
import NoticesAddPetBtn from '../../components/NoticesAddPetBtn/NoticesAddPetBtn';
import {
  NoticesPageContainer,
  NoticesPageContainerFilterAdd,
} from './NoticesPage.styled';

export const NoticesPage = () => {
  return (
    <NoticesPageContainer>
      <NoticesCategoriesNav />
      <NoticesPageContainerFilterAdd>
        <NoticesFiltersBtn />
        <NoticesAddPetBtn />
      </NoticesPageContainerFilterAdd>
    </NoticesPageContainer>
  );
};

export default NoticesPage;
