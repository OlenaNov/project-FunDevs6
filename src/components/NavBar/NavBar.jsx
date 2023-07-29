import { FaBars, FaTimes } from 'react-icons/fa';

// import { Outlet } from 'react-router-dom';
import { DesktopNav } from './Other/DesktopNav/DesktopNav';
import { DesktopAuth } from './Other/DesktopAuth/DesktopAuth';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/auth-selectors';

import React, { useState } from 'react';
import {
  Header,
  Logo,
  DropDownMenu,
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
  UserBtn,
} from './NavBar.styled';
import image from '../../images/logo/logo-large.svg';
import user from '../../images/user/user.svg';
// import Paw from "./img/paw.svg";

export const NavBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // const isLoggedIn = true;

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClick = () => {
    setIsOpen(true);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  return (
    <Header>
      <Logo to="/main">
        <img src={image} alt="logo" />
      </Logo>
      {isOpen && (
        <DropDownMenu>
          {!isLoggedIn && (
            <AuthList>
              <AuthItem>
                <LogIn type="button" to="/login">
                  Log IN
                </LogIn>
              </AuthItem>
              <AuthItem>
                <Registr type="button" to="/register">
                  Registration
                </Registr>
              </AuthItem>
            </AuthList>
          )}
          <Nav>
            <NavList>
              <NavItem>
                <NavLink to="/news">News</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="notices">Find pet</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/friends">Our friends</NavLink>
              </NavItem>
            </NavList>
          </Nav>
        </DropDownMenu>
      )}

      <DesktopNav />

      {isLoggedIn ? (
        <Link to="/user">
          <UserBtn type="button">
            <img src={user} alt="user" /> <span>{}</span>
          </UserBtn>
        </Link>
      ) : (
        <DesktopAuth />
      )}

      <OpenBtn open={!isOpen} onClick={handleOpenClick}>
        <FaBars />
      </OpenBtn>
      <CloseBtn open={isOpen} onClick={handleCloseClick}>
        <FaTimes />
      </CloseBtn>
    </Header>
  );
};

export default NavBar;
