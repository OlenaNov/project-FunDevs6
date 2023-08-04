import {
  NavDesktop,
  NavListDesktop,
  NavItemDesktop,
  NavLinkDesktop,
} from './DesktopNav.styled';

export const DesktopNav = () => {
  return (
    <NavDesktop>
      <NavListDesktop>
        <NavItemDesktop>
          <NavLinkDesktop to="/news" activeClassName="active">
            News
          </NavLinkDesktop>
        </NavItemDesktop>
        <NavItemDesktop>
          <NavLinkDesktop to="notices" activeClassName="active">
            Find pet
          </NavLinkDesktop>
        </NavItemDesktop>
        <NavItemDesktop>
          <NavLinkDesktop to="/friends" activeClassName="active">
            Our friends
          </NavLinkDesktop>
        </NavItemDesktop>
      </NavListDesktop>
    </NavDesktop>
  );
};

export default DesktopNav;
