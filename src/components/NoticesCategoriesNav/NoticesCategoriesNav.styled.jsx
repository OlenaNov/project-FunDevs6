import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const StyledNavLink = styled(NavLink)`
  position: relative;
  color: ${props =>
    props.active === 'true' ? theme.colors.white : theme.colors.blue};
  background: ${props =>
    props.active === 'true' ? theme.colors.blue : theme.colors.lightBlue};
  padding: 8px 16px;
  border-radius: 40px;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: ${theme.fontSizes[1]};
  line-height: 19px;
  align-items: center;
  letter-spacing: 0.04em;
  transition: color 250ms ease-in, background-color 250ms ease-in;

  &.active {
    color: ${theme.colors.white};

    background-color: ${theme.colors.blue};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;

    width: 100%;
    height: 100%;

    background: ${theme.colors.gradientBlue};
    border-radius: 40px;
    opacity: 0;

    z-index: -1;

    transition: opacity 300ms ${theme.transition.main};
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  &:hover,
  &:focus {
    color: ${theme.colors.white};

    background-color: transparent;
  }
`;

export const StyledNavLinkWrapper = styled('div')`
  max-width: 540px;
  min-width: 205px;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  gap: 12px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 320px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 540px;
  }
`;
