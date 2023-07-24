import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const StyledNavLink = styled(NavLink)`
  color: ${theme.colors.blue};
  background: ${theme.colors.lightBlue};
  padding: 8px 16px;
  border-radius: 40px;
  font-family: 'Manrope', sans-serif;
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
`;

export const StyledNavLinkWrapper = styled('div')`
  max-width: 540px;
  min-width: 205px;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  gap: 12px;
`;
