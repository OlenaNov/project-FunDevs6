import { FaBars, FaTimes } from 'react-icons/fa';

// import { Outlet } from 'react-router-dom';
import { DesktopNav } from './Other/DesktopNav/DesktopNav';
import { DesktopAuth } from './Other/DesktopAuth/DesktopAuth';

import { useSelector } from 'react-redux';
import { selectIsLogin, getUser } from 'redux/auth/auth-selectors';
import { Link } from 'react-router-dom';
import MobLogout from './Other/LogOutCopmponents/MobileLogout/MobLogout';
import TabLogout from './Other/LogOutCopmponents/TabletLogout/TabLogout';
import DesktopLogout from './Other/LogOutCopmponents/DesktopLogout/DesktopLogout';
import UserMob from './Other/UserMob/UserMob';

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
  Menu,
  GlobalStyles,
} from './NavBar.styled';
import image from 'images/logo/logo-large.svg';
import user from 'images/user/user.svg';
import paw from 'images/paw-logIn/paw.svg';

export const NavBar = () => {
  const isLoggedIn = useSelector(selectIsLogin);
  const { name } = useSelector(getUser);

  // console.log(isLoggedIn);
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
    <>
      <GlobalStyles menuOpen={isOpen} />
      <Header>
        <Logo to="/">
          <img src={image} alt="logo" />
        </Logo>
        {isOpen && (
          <DropDownMenu>
            {!isLoggedIn && (
              <AuthList>
                <AuthItem>
                  <Link to="/login">
                    <LogIn type="button" to="/login" onClick={handleCloseClick}>
                      Log IN <img src={paw} alt="paw" />
                    </LogIn>
                  </Link>
                </AuthItem>
                <AuthItem>
                  <Link to="/register">
                    <Registr
                      type="button"
                      to="/register"
                      onClick={handleCloseClick}
                    >
                      Registration
                    </Registr>
                  </Link>
                </AuthItem>
              </AuthList>
            )}
            {isLoggedIn && <UserMob />}

            <Nav>
              <NavList>
                <NavItem onClick={handleCloseClick}>
                  <NavLink to="/news">News</NavLink>
                </NavItem>
                <NavItem onClick={handleCloseClick}>
                  <NavLink to="/notices/sell">Find pet</NavLink>
                </NavItem>

                <NavItem onClick={handleCloseClick}>
                  <NavLink to="/friends">Our friends</NavLink>
                </NavItem>
              </NavList>
            </Nav>
            {isLoggedIn && <MobLogout />}
            <Menu></Menu>
          </DropDownMenu>
        )}

        <DesktopNav />

        {isLoggedIn && <DesktopLogout />}

        {isLoggedIn && isOpen ? (
          <TabLogout />
        ) : isLoggedIn ? (
          <UserContainer>
            <Link to="/user">
              <UserBtn type="button">
                <img src={user} alt="user" /> <UserName>{name}</UserName>
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
      </Header>
    </>
  );
};

export default NavBar;
