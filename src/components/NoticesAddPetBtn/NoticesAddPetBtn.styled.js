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

  &:hover,
  &:focus {
    color: ${theme.colors.white};
    background-color: #449ded;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const StyledNavLinkWrapper = styled('div')`
  width: 120px;
  height: 100%;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  gap: 12px;
  margin-left: 12px;

  @media screen and (min-width: 100px) and (max-width: 370px) {
    position: fixed;
    z-index: 1;
    margin-top: 60%;
    margin-right: 12%;
    width: 80px;
    height: 80px;
  }

  @media screen and (min-width: 371px) and (max-width: 424px) {
    position: fixed;
    z-index: 1;
    margin-top: 55%;
    margin-right: 24%;
    width: 80px;
    height: 80px;
  }

  @media screen and (min-width: 425px) and (max-width: 767px) {
    position: fixed;
    z-index: 1;
    margin-top: 40%;
    margin-right: 31%;
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
