import { FaBars, FaTimes } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';

// import { BurgerMenu } from "./Burger/BurgerMenu";
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
import image from '../../images/logo/logo-large.svg';
// import Paw from "./img/paw.svg";

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
      <Logo to="/">
        <img src={image} alt="logo" />
      </Logo>

      <Nav open={isOpen}>
        <NavList>
          <NavItem>
            <NavLink to="/news">News</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/notices">Find pet</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/friends">Our friends</NavLink>
          </NavItem>
        </NavList>
      </Nav>
      <AuthList open={isOpen}>
        <AuthItem>
          <LogIn type="button">Log IN</LogIn>
        </AuthItem>
        <AuthItem>
          <Registr type="button">Registration</Registr>
        </AuthItem>
      </AuthList>
      <OpenBtn open={!isOpen} onClick={handleOpenClick}>
        <FaBars />
      </OpenBtn>
      <CloseBtn open={isOpen} onClick={handleCloseClick}>
        <FaTimes />
      </CloseBtn>
      <Outlet />
    </Header>
  );
};

export default NavBar;
