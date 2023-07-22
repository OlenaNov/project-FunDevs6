import {
  StyledNavLink,
  StyledNavLinkWrapper,
} from './NoticesCategoriesNav.styled';
// import { useSelector } from 'react-redux';
// добавить импорт с redux/auth/selectors
// import { selectIsUserLogin } from 'redux/auth/selectors';

export const NoticesCategoriesNav = () => {
  //   const isLoggedIn = useSelector(selectIsUserLogin);

  return (
    <>
      <StyledNavLinkWrapper>
        <StyledNavLink to={`/notices/sell`}>sell</StyledNavLink>
        <StyledNavLink to={`/notices/lost-found`}>lost/found</StyledNavLink>
        <StyledNavLink to={`/notices/for-free`}>in good hands</StyledNavLink>

        {/* isLoggedIn если пользователь авторизован показать + следующие категории */}

        <StyledNavLink to={`/notices/favourite`}>favorite ads</StyledNavLink>
        <StyledNavLink to={`/notices/own`}>my ads</StyledNavLink>
      </StyledNavLinkWrapper>
    </>
  );
};

export default NoticesCategoriesNav;
