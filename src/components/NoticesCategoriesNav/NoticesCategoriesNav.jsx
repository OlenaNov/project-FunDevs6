import {
  StyledNavLink,
  StyledNavLinkWrapper,
} from './NoticesCategoriesNav.styled';
import { useSelector } from 'react-redux';
import { isLoading } from '../../redux/auth/auth-selectors';

export const NoticesCategoriesNav = () => {
  const isLoggedIn = useSelector(isLoading);

  return (
    <>
      <StyledNavLinkWrapper>
        <StyledNavLink to={`/notices/sell`}>sell</StyledNavLink>
        <StyledNavLink to={`/notices/lost-found`}>lost/found</StyledNavLink>
        <StyledNavLink to={`/notices/for-free`}>in good hands</StyledNavLink>
        {isLoggedIn && (
          <>
            <StyledNavLink to={`/notices/favourite`}>
              favorite ads
            </StyledNavLink>
            <StyledNavLink to={`/notices/own`}>my ads</StyledNavLink>
          </>
        )}
      </StyledNavLinkWrapper>
    </>
  );
};

export default NoticesCategoriesNav;
