import { FaBars, FaTimes } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import { DesktopNav } from './Other/DesktopNav/DesktopNav';
import { DesktopAuth } from './Other/DesktopAuth/DesktopAuth';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn, getUser } from '../../redux/auth/auth-selectors';
import { Link } from 'react-router-dom';

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
  UserContainer,
  UserName,
} from './NavBar.styled';
import image from '../../images/logo/logo-large.svg';
import user from '../../images/user/user.svg';
import paw from '../../images/paw-logIn/paw.svg';

export const NavBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const username = useSelector(getUser);

  // const username = 'Dima';
  // const isLoggedIn = false;

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
                <Link to="/login">
                  <LogIn type="button" to="/login">
                    Log IN <img src={paw} alt="paw" />
                  </LogIn>
                </Link>
              </AuthItem>
              <AuthItem>
                <Link to="/register">
                  <Registr type="button" to="/register">
                    Registration
                  </Registr>
                </Link>
              </AuthItem>
            </AuthList>
          )}
          <Nav>
            <NavList>
              <NavItem onClick={handleCloseClick}>
                <NavLink to="/news">News</NavLink>
              </NavItem>

              <NavItem onClick={handleCloseClick}>
                <NavLink to="notices">Find pet</NavLink>
              </NavItem>

              <NavItem onClick={handleCloseClick}>
                <NavLink to="/friends">Our friends</NavLink>
              </NavItem>
            </NavList>
          </Nav>
        </DropDownMenu>
      )}

      <DesktopNav />

      {isLoggedIn ? (
        <UserContainer>
          <Link to="/user">
            <UserBtn type="button">
              <img src={user} alt="user" /> <UserName>{username}</UserName>
            </UserBtn>
          </Link>
        </UserContainer>
      ) : (
        <DesktopAuth />
      )}

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
