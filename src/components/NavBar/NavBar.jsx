import { FaBars, FaTimes } from 'react-icons/fa';
import React, { useState } from 'react';
import {
  Header,
  Logo,
  CloseBtn,
  OpenBtn,
  Nav,
  NavList,
  NavItem,
  NavLink,
  LogIn,
  Registr,
  AuthList,
  AuthItem,
} from './NavBar.styled';
import image from './logo.jpeg';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClick = () => {
    setIsOpen(true);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  return (
    <Header>
      <Logo href="/">
        <img src={image} alt="logo" />
      </Logo>
      <OpenBtn open={!isOpen} onClick={handleOpenClick}>
        <FaBars />
      </OpenBtn>
      <Nav open={isOpen}>
        <NavList>
          <NavItem>
            <NavLink href="/#">News</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/#">Find pet</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/#">Our friends</NavLink>
          </NavItem>
        </NavList>
        <CloseBtn open={isOpen} onClick={handleCloseClick}>
          <FaTimes />
        </CloseBtn>
      </Nav>
      <AuthList>
        <AuthItem>
          <LogIn type="button">Log IN</LogIn>
        </AuthItem>
        <AuthItem>
          <Registr type="button">Registration</Registr>
        </AuthItem>
      </AuthList>
    </Header>
  );
};

export default NavBar;
