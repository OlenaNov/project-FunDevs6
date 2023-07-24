import styled from 'styled-components';

// Styled components
export const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    list-style: none;
    display: flex;
    gap: 20px;

    li {
      a {
        color: #fff;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    ul {
      flex-direction: column;
      gap: 10px;
    }
  }
`;

export const Logo = styled.a`
  color: #fff;
  font-size: 24px;
  text-decoration: none;
  font-weight: bold;
`;

export const CloseBtn = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
  }
`;

export const OpenBtn = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
  }
`;
