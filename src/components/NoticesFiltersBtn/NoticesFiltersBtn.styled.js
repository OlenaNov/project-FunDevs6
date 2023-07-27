import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  color: ${theme.colors.blue};
  border: 1px solid #54adff;
  background: #ffff;
  padding: 8px 16px;
  border-radius: 40px;
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: ${theme.fontSizes[1]};
  line-height: 19px;
  align-items: center;
  letter-spacing: 0.04em;
  transition: color 250ms ease-in, background-color 250ms ease-in;

  &:hover,
  &:focus {
    color: ${theme.colors.white};
    background-color: ${theme.colors.blue};
  }

  @media screen and (max-width: 767px) {
    border-radius: 50%;
    padding: 10px;
  }
`;

export const StyledNavLinkWrapper = styled('div')`
  min-width: 300px;
  display: flex;
  justify-content: right;

  @media screen and (max-width: 767px) {
    min-width: 0px;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    min-width: 200px;
  }
`;

export const IconWrapper = styled('div')`
  display: flex;
  align-items: center;
  margin-left: 8px;

  @media screen and (max-width: 767px) {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`;
