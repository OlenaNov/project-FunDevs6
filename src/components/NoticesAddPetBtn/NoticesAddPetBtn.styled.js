import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  color: ${theme.colors.white};
  background: ${theme.colors.blue};
  padding: 8px 16px;
  border-radius: 40px;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: ${theme.fontSizes[1]};
  line-height: 19px;
  ${'' /* align-items: center; */}
  letter-spacing: 0.04em;
  transition: color 250ms ease-in, background-color 250ms ease-in;

  &.active {
    color: ${({ theme }) => theme.colors.white};

    background-color: ${({ theme }) => theme.colors.blue};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;

    width: 100%;
    height: 100%;

    background: ${({ theme }) => theme.colors.gradientBlue};
    border-radius: 40px;
    opacity: 0;

    z-index: -1;

    transition: opacity 300ms ${({ theme }) => theme.transition.main};
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};

    background-color: transparent;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const StyledNavLinkWrapper = styled('div')`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  gap: 12px;
  margin-left: 12px;

  @media screen and (min-width: 100px) and (max-width: 370px) {
    position: fixed;
    z-index: 1;
    margin-top: 75%;
    margin-left: -25%;
    width: 80px;
    height: 80px;
  }

  @media screen and (min-width: 371px) and (max-width: 424px) {
    position: fixed;
    z-index: 1;
    margin-top: 68%;
    margin-left: -25%;
    width: 80px;
    height: 80px;
  }

  @media screen and (min-width: 425px) and (max-width: 548px) {
    position: fixed;
    z-index: 1;
    margin-top: 57%;
    margin-left: -20%;
    width: 80px;
    height: 80px;
  }

  @media screen and (min-width: 549px) and (max-width: 669px) {
    position: fixed;
    z-index: 1;
    margin-top: 45%;
    margin-left: -15%;
    width: 80px;
    height: 80px;
  }

  @media screen and (min-width: 670px) and (max-width: 767px) {
    position: fixed;
    z-index: 1;
    margin-top: 37%;
    margin-left: -13%;
    width: 80px;
    height: 80px;
  }
`;

export const IconWrapper = styled('div')`
  display: flex;
  align-items: center;
  margin-left: 8px;
  color: ${theme.colors.blue};
  @media screen and (max-width: 767px) {
    justify-content: center;
    margin-left: 0px;
    margin-bottom: 4px;
  }
`;

export const IconWrapperMobill = styled('div')`
  font-size: 12px;
`;
