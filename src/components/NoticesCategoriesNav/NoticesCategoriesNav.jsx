import {
  StyledNavLink,
  StyledNavLinkWrapper,
} from './NoticesCategoriesNav.styled';
import { useSelector } from 'react-redux';
import { isUserLogin } from '../../redux/auth/auth-selectors';
import { useLocation } from 'react-router-dom';

export const NoticesCategoriesNav = () => {
  const isLoggedIn = useSelector(isUserLogin);
  const { pathname, search } = useLocation();
  const path = pathname.split('/');

  return (
    <>
      <StyledNavLinkWrapper>
        <StyledNavLink
          to={{ pathname: `/notices/sell`, search }}
          active={(path[path.length - 1] === 'sell').toString()}
        >
          sell
        </StyledNavLink>
        <StyledNavLink
          to={{ pathname: `/notices/lost-found`, search }}
          active={(path[path.length - 1] === 'lost-found').toString()}
        >
          lost/found
        </StyledNavLink>
        <StyledNavLink
          to={{ pathname: `/notices/for-free`, search }}
          active={(path[path.length - 1] === 'for-free').toString()}
        >
          in good hands
        </StyledNavLink>
        {isLoggedIn && (
          <>
            <StyledNavLink
              to={{ pathname: `/notices/favorite`, search }}
              active={(path[path.length - 1] === 'favorite').toString()}
            >
              favorite ads
            </StyledNavLink>
            <StyledNavLink
              to={{ pathname: `/notices/my-ads`, search }}
              active={(path[path.length - 1] === 'my-ads').toString()}
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
