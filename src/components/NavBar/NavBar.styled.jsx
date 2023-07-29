import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  background-color: #fff;
  padding: 20px;
  display: flex;
  justify-content: end;
  align-items: center;
  position: relative;
  @media screen and (min-width: 768px) {
    padding: 24px 32px;
  }
  @media screen and (min-width: 1200px) {
    padding: 20px 16px;
  }
`;
export const Logo = styled(Link)`
  margin-right: auto;
  width: 116px;
  height: 20px;
  @media screen and (min-width: 768px) {
    width: 162px;
    height: 28px;
    margin-right: auto;
  }

  @media screen and (min-width: 1200px) {
    margin-right: auto;
  }
`;

export const DropDownMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  @media screen and(min-width: 1200px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  background-color: #fff;
`;

export const NavList = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const NavItem = styled.li`
  margin: 0 auto;
`;

export const NavLink = styled(Link)`
  color: #111;
  font-family: Manrope;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.28px;

  &:hover {
    color: #ffc107;
  }
`;

export const CloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #ffc107;
  cursor: pointer;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  align-items: center;
  width: 24px;
  height: 24px;
  margin-left: 25px;

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const OpenBtn = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #ffc107;
  cursor: pointer;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  align-items: center;
  width: 24px;
  height: 24px;
  margin-left: 25px;

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const AuthList = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-bottom: 40px;
  @media screen and(min-width: 768px) {
    display: none;
  }
`;

export const AuthItem = styled.li``;

export const LogIn = styled.button`
  display: flex;
  width: 165px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 40px;
  border: 2px solid var(--yellow, #ffc107);
  background: var(--yellow, #ffc107);

  color: #fef9f9;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
  @media screen and(min-width: 768px) {
    display: none;
  }
`;

export const Registr = styled.button`
  display: flex;
  width: 165px;
  padding: 7px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: transparent;

  border-radius: 40px;
  border: 2px solid #ffc107;

  color: #ffc107;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.64px;
`;
