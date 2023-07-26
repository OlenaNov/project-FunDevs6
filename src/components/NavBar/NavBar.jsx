import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import { Header, Logo, CloseBtn, OpenBtn, Nav } from './NavBar.styled';

export const NavBar = () => {
  const navRef = useRef(null);

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <Header>
      <Nav>
        <Logo href="/#">Your pet</Logo>
        <ul>
          <li>
            <a href="/#">News</a>
          </li>
          <li>
            <a href="/#">Find pet</a>
          </li>
          <li>
            <a href="/#">Our friends</a>
          </li>
        </ul>
        <CloseBtn onClick={showNavbar}>
          <FaTimes />
        </CloseBtn>
      </Nav>
      <OpenBtn className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </OpenBtn>
    </Header>
  );
};

export default NavBar;
