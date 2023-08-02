import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const NoticesContainter = styled.div`
  padding-top: ${theme.space[3] * 5 + 'px'};
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 117px;
  max-width: 320px;
  margin: 0 auto;
  margin-top: 64px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-top: ${theme.space[4] * 5 + 'px'};
    padding-right: 16px;
    padding-left: 16px;
    padding-bottom: 209px;
    max-width: ${theme.breakpoints.tablet};
    margin-top: 76px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    max-width: 1280px;
    margin-top: 80px;
  }
`;

export const NoticesPageContainer = styled('div')`
  width: 100%;
  height: 100%;
  padding-top: ${theme.space[3] * 2 + 4 + 'px'};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-top: ${theme.space[3] * 5 + 'px'};
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[7]};
  }
`;

export const NoticeFilterContainer = styled.div`
  display: flex;
  ${
    '' /* display: flex;
  justify-content: space-around;
  align-items: flex-start; */
  }

  @media screen and (max-width: 767px) {
    width: 280px;
  }

  @media screen and (min-width: 761px) {
    max-width: 768px;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-right: 15px;
    padding-left: 15px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    max-width: 1280px;
  }
`;

export const NoticesPageContainerFilterAdd = styled('div')`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  float: right;
`;
