import styled from 'styled-components';

export const NoticesPageContainer = styled('div')`
  width: 100%;
  height: 100%;
  padding-top: ${({ theme }) => theme.space[3] * 5 + 'px'};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: ${({ theme }) => theme.space[4] * 5 + 'px'};
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
  margin-right: 20px;
  margin-left: 30px;
  @media screen and (max-width: 760px) {
  }
  @media screen and (min-width: 761px) {
    justify-content: space-around;
    align-items: flex-start;
    margin-right: 20px;
    margin-left: 30px;
  }
`;

export const NoticesPageContainerFilterAdd = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`;
