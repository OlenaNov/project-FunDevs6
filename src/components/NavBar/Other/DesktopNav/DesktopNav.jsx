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
          <NavLinkDesktop to="/news">News</NavLinkDesktop>
        </NavItemDesktop>
        <NavItemDesktop>
          <NavLinkDesktop to="notices">Find pet</NavLinkDesktop>
        </NavItemDesktop>
        <NavItemDesktop>
          <NavLinkDesktop to="/friends">Our friends</NavLinkDesktop>
        </NavItemDesktop>
      </NavListDesktop>
    </NavDesktop>
  );
};

export default DesktopNav;
