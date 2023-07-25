import styled from 'styled-components';

export const Header = styled.header`
  background-color: #fff;
  padding: 20px;
  display: flex;
  justify-content: end;
  align-items: center;

  @media (min-width: 768px) {
    padding: 32px;
  }
`;

export const Nav = styled.nav`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: auto;
  }
`;

export const Logo = styled.a`
  font-size: 20px;
  color: #333;
  text-decoration: none;
  margin-right: auto;
  /* margin-bottom: 16px; */

  @media (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 0;
    margin-right: 159px;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }
`;

export const NavItem = styled.li`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const NavLink = styled.a`
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
  cursor: pointer;
  position: fixed;
  right: 20px;
  top: 20px;
  display: ${({ open }) => (open ? 'flex' : 'none')};

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

  @media (min-width: 768px) {
    display: none;
  }
`;

export const AuthList = styled.ul`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

export const AuthItem = styled.li`
  @media (min-width: 768px) {
  }
`;

export const LogIn = styled.button`
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
