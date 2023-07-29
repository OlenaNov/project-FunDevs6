import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavDesktop = styled.nav`
  display: none;

  @media screen and (min-width: 1200px) {
    position: static;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: auto;
    transform: none;
    background-color: transparent;
  }
`;

export const NavListDesktop = styled.ul`
  @media screen and (min-width: 1200px) {
    list-style: none;
    padding: 0;
    margin: auto;
    display: flex;
    flex-direction: row;
    gap: 40px;
  }
`;

export const NavItemDesktop = styled.li`
  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: center;
    margin-bottom: 0;
  }
`;

export const NavLinkDesktop = styled(Link)`
  @media screen and (min-width: 1200px) {
    color: #111;
    font-family: Manrope;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.8px;
  }

  &:hover {
    color: #ffc107;
  }
`;
