import {
  StyledNavLink,
  StyledNavLinkWrapper,
} from './NoticesCategoriesNav.styled';
import { useSelector } from 'react-redux';
import { isUserLogin } from '../../redux/auth/auth-selectors';
import { useLocation } from 'react-router-dom';

export const NoticesCategoriesNav = () => {
  const isLoggedIn = useSelector(isUserLogin);
  const { pathname } = useLocation();
  const path = pathname.split('/');

  return (
    <>
      <StyledNavLinkWrapper>
        <StyledNavLink
          to={`/notices/sell`}
          active={(path[path.length - 1] === 'sell').toString()}
        >
          sell
        </StyledNavLink>
        <StyledNavLink
          to={`/notices/lost-found`}
          active={(path[path.length - 1] === 'lost-found').toString()}
        >
          lost/found
        </StyledNavLink>
        <StyledNavLink
          to={`/notices/for-free`}
          active={(path[path.length - 1] === 'for-free').toString()}
        >
          in good hands
        </StyledNavLink>
        {isLoggedIn && (
          <>
            <StyledNavLink
              to={`/notices/favorite`}
              active={(path[path.length - 1] === 'favorite').toString()}
            >
              favorite ads
            </StyledNavLink>
            <StyledNavLink
              to={`/notices/own`}
              active={(path[path.length - 1] === 'own').toString()}
            >
              my ads
            </StyledNavLink>
          </>
        )}
      </StyledNavLinkWrapper>
    </>
  );
};

export default NoticesCategoriesNav;
