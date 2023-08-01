import { styled } from 'styled-components';

export const FormTitle = styled.h2`
  font-weight: 500;
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

  padding-top: ${({ theme }) => theme.space[2] * 5 + 'px'};
  padding-right: ${({ theme }) => theme.space[2] * 2 + 'px'};
  padding-bottom: ${({ theme }) => theme.space[2] * 6 + 'px'};
  padding-left: ${({ theme }) => theme.space[2] * 2 + 'px'};
  background: #ffffff;
  box-shadow: ${({ theme }) => theme.boxShadows.main};
  border-radius: 20px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 704px;
    padding-top: ${({ theme }) => theme.space[2] * 5 + 'px'};
    padding-right: 76px;
    padding-bottom: ${({ theme }) => theme.space[2] * 5 + 'px'};
    padding-left: ${({ theme }) => theme.space[2] * 5 + 'px'};
    border-radius: 40px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 395px;
    height: 520px;
    padding: ${({ theme }) => theme.space[2] * 5 + 'px'};
  }
`;
