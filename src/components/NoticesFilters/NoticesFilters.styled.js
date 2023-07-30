import styled from 'styled-components';
import { theme } from '../../theme/theme';
import { FiFilter } from 'react-icons/fi';
import { SlArrowUp } from 'react-icons/sl';

export const FilterWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 100;
  background-color: transparent;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    position: static;
  }
`;

export const FilterOpenBtn = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c5dff6;
  color: ${theme.colors.blue};

  transition: color 250ms cubic-bezier(0.215, 0.61, 0.355, 1),
    background-color 250ms cubic-bezier(0.215, 0.61, 0.355, 1);

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
    border-color: transparent;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    position: relative;
    padding: 9px;
    width: 152px;
    border: 2px solid ${theme.colors.blue};
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background-color: transparent;
  }
`;

export const FilterBtnLabel = styled.span`
  display: none;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const FilterBtnIcon = styled(FiFilter)`
  color: currentColor;
  width: 24px;
  height: 24px;
`;

export const FilterDropDownContainer = styled.div`
  position: absolute;
  margin-top: 50px;
  padding: 8px;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: ${theme.boxShadows.main};

  @media screen and (max-width: 767px) {
    right: 0;
    top: 0;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-top: 20px;
  }
`;

export const DropDownContent = styled.div``;

export const DropDownContentText = styled.p`
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: ${theme.colors.blue};
`;

export const DropDownSubMenu = styled.div`
  width: 136px;
  margin-bottom: 8px;
  padding: 8px;
  padding-right: 10px;
  padding-left: 12px;
  border-radius: 20px;
  background-color: ${theme.colors.lightBlue};
  transition: background-color 250ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover,
  &:focus {
    background-color: #aed1f3;

    & button {
      background-color: #aed1f3;
    }
  }
`;

export const FilterBtn = styled.button`
  width: 100%;
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${theme.colors.lightBlue};
  transition: 250ms cubic-bezier(0.215, 0.61, 0.355, 1);
`;

export const ArrowIcon = styled(SlArrowUp)`
  color: ${theme.colors.blue};
  width: 16px;
  height: 16px;
`;

export const BtnLabel = styled.span`
  font-family: ${theme.fonts.secondary.regular};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${theme.colors.blue};
`;

export const FilterForm = styled.form`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FilterFormLabel = styled.label`
font-family: ${theme.fonts.secondary.regular}
  padding: 4px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${theme.colors.blue};
`;

export const FilterFormInput = styled.input`
  width: 16px;
  height: 16px;
  margin: 0;
  display: grid;
  place-content: center;
  line-height: 0;
  border-radius: 4px;
  border: 2px solid ${theme.colors.blue};
  appearance: none;

  &::before {
    content: '';
    width: 0.85em;
    height: 0.85em;
    transform: scale(0);
    box-shadow: inset 1em 1em ${theme.colors.blue};
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }

  &:checked {
    &::before {
      transform: scale(1);
    }

    &:hover,
    &:focus {
      transform: scale(1.2);
    }
  }
`;
