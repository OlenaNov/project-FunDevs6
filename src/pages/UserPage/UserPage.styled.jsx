import { styled } from 'styled-components';
import { theme } from '../../theme/theme';

export const FormTitle = styled.h2`
  font-weight: 500;
  margin-left: 20px;
  margin-bottom: 24px;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  line-height: 1.36;
  letter-spacing: 0.04em;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
`;

export const UserCardWrap = styled.div`
  padding: 20px;
  position: relative;
  /* padding-top: ${({ theme }) => theme.space[2] * 5 + 'px'};
  padding-right: ${({ theme }) => theme.space[2] * 2 + 'px'};
  padding-bottom: ${({ theme }) => theme.space[2] * 6 + 'px'};
  padding-left: ${({ theme }) => theme.space[2] * 2 + 'px'}; */
  background: #ffffff;
  box-shadow: ${({ theme }) => theme.boxShadows.main};
  border-radius: 20px;
  width: 280px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    padding-top: ${({ theme }) => theme.space[2] * 5 + 'px'};
    padding-right: 76px;
    padding-bottom: ${({ theme }) => theme.space[2] * 5 + 'px'};
    padding-left: ${({ theme }) => theme.space[2] * 5 + 'px'};
    border-radius: 40px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-grow: 0;
    width: 395px;
    height: 520px;
    padding: ${({ theme }) => theme.space[2] * 5 + 'px'};
  }
  overflow: hidden;
`;

export const ContainerWrapper = styled.div`
  margin: 0 auto;
  margin-top: 88px;
  max-width: 320px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-top: 130px;
    max-width: 768px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-top: 128px;
    display: flex;
    max-width: 1280px;
    gap: 32px;
  }
`;

export const ContainerPets = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (max-width: 746px) {
    justify-content: center;
    margin-right: 0px;
  }

  @media screen and (min-width: 767px) and (max-width: 1279px) {
    margin-top: 30px;
  }

  @media screen and (min-width: 747px) and (max-width: 1399px) {
    justify-content: center;
  }
`;
