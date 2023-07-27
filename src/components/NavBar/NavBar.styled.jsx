import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  background-color: #fff;
  padding: 24px;
  display: flex;
  justify-content: end;
  align-items: center;
  position: relative;
  @media (min-width: 768px) {
    padding: 20px;
  }
`;

export const Nav = styled.nav`
  display: none;
  /* transform: translateY(-100%); */

  @media (min-width: 768px) {
    position: static;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: auto;
    transform: none;
    background-color: transparent;
  }
`;

export const Logo = styled(Link)`
  margin-right: auto;
  width: 116px;
  height: 20px;
  @media (min-width: 480px) {
    width: 162px;
    height: 28px;
    margin-right: auto;
  }

  @media (min-width: 768px) {
    margin-right: auto;
  }
`;

export const NavList = styled.ul`
  /* flex-direction: column; */

  @media (min-width: 768px) {
    list-style: none;
    padding: 0;
    margin: auto;
    display: flex;
    flex-direction: row;
    gap: 40px;
  }
`;

export const NavItem = styled.li`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    margin-bottom: 0;
  }
`;

export const NavLink = styled(Link)`
  /* color: #333;
  text-decoration: none;
  font-size: 16px; */

  @media (min-width: 768px) {
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

  @media (min-width: 768px) {
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

  @media (min-width: 768px) {
    display: none;
  }
`;

export const AuthList = styled.ul`
  display: none;
  /* position: absolute;
  top: 100%;
  left: 0;
  background-color: transparent;
  display: ${({ open }) => (open ? 'flex' : 'none')}; */

  transition: transform 0.3s ease-in-out;
  z-index: 1;
  @media (min-width: 480px) {
    position: static;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    transform: none;
    background-color: transparent;
  }
`;

export const AuthItem = styled.li`
  @media (min-width: 768px) {
    display: block;
  }
`;
// export const LogInImg = styled.img`
//   @media (min-width: 768px) {
//     display: flex;
//     fill: black;
//   }
// `;

export const LogIn = styled.button`
  width: 165px;
  padding: 7px 20px;
  border-radius: 40px;
  border: 2px solid #ffc107;
  background: #ffc107;

  color: #fef9f9;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;

  @media (min-width: 768px) {
    width: 165px;
    padding: 8px 20px;
    border-radius: 40px;
    border: 2px solid #ffc107;
    background: #ffc107;

    color: #fef9f9;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.64px;
  }

  &:hover {
    animation: jello-horizontal 0.9s both;
  }

  @keyframes jello-horizontal {
    0% {
      transform: scale3d(1, 1, 1);
    }

    30% {
      transform: scale3d(1.25, 0.75, 1);
    }

    40% {
      transform: scale3d(0.75, 1.25, 1);
    }

    50% {
      transform: scale3d(1.15, 0.85, 1);
    }

    65% {
      transform: scale3d(0.95, 1.05, 1);
    }

    75% {
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }
`;

export const Registr = styled.button`
  width: 165px;
  padding: 7px 20px;
  border-radius: 40px;
  border: 2px solid #ffc107;
  background: transparent;

  color: #ffc107;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.64px;

  @media (min-width: 768px) {
    width: 165px;
    padding: 8px 20px;
    border-radius: 40px;
    border: 2px solid #ffc107;
    background: transparent;

    color: #ffc107;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.64px;
  }
  &:hover {
    animation: jello-horizontal 0.9s both;
  }

  @keyframes jello-horizontal {
    0% {
      transform: scale3d(1, 1, 1);
    }

    30% {
      transform: scale3d(1.25, 0.75, 1);
    }

    40% {
      transform: scale3d(0.75, 1.25, 1);
    }

    50% {
      transform: scale3d(1.15, 0.85, 1);
    }

    65% {
      transform: scale3d(0.95, 1.05, 1);
    }

    75% {
      transform: scale3d(1.05, 0.95, 1);
    }

    100% {
      transform: scale3d(1, 1, 1);
    }
  }
`;
