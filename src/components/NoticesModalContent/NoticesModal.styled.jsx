import styled from 'styled-components';
import { LiaHeart } from 'react-icons/lia';

export const NoticesModalContainer = styled.div`
  width: 280px;
  padding-top: 44px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 681px;
    padding-top: 32px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
  }
`;

export const NoticesModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 12px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 24px;
  }
`;

export const NoticesContentImageWrapper = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  margin: 0 auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 262px;
    height: 298px;
`;

export const NoticesContentImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0px 0px 40px 40px;
  object-fit: cover;
`;

export const NoticesContentCategory = styled.span`
font-family: ${({ theme }) => theme.fonts.main.medium}
  width: 126px;
  padding: 11px 17px;
  position: absolute;
  top: 16px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 0px 16px 16px 0px;
`;

export const NoticesPetInfo = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex: 1;
  }
`;

export const NoticesPetInfoTitle = styled.h2`
  width: 198px;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  color: #000000;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 321px;
    font-size: 28px;
    line-height: 38px;
  }
`;

export const NoticesPetInfoTable = styled.table`
  width: 256px;
  table-layout: fixed;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 340px;
  }
`;

export const NoticesTableLabel = styled.td`
  font-family: ${({ theme }) => theme.fonts.main.semiBold};
  width: 80px;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #000000;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 120px;
    font-size: 16px;
    line-height: 22px;
  }
`;

export const NoticesTableValue = styled.td`
  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #000000;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const NoticesEmailLink = styled.a`
  color: ${({ theme }) => theme.colors.yellow};
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  text-decoration: underline;
`;

export const NoticesComment = styled.p`
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  font-size: 16px;
  line-height: 22px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 70px;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const NoticesBtnWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: flex-end;
    flex-direction: row;
    gap: 17px;
  }
`;

export const NoticesBtn = styled.button`
  position: relative;
  padding: 8px 20px;
  border: none;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: ;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: #fef9f9;
  transition: background-color 250ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover,
  &:focus {
    background-color: transparent;

    &::before {
      opacity: 1;
    }
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: inherit;

    position: absolute;
    top: 0;
    left: 0;

    background: ${({ theme }) => theme.colors.gradientBlue};
    opacity: 0;

    transition: opacity 250ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  & span {
    z-index: 5;
  }

  & svg {
    z-index: 5;
  }
`;

export const NoticesBtnLabel = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: var(--main-back);
`;

export const NoticesContactLink = styled.a`
  position: relative;
  width: 256px;
  height: 40px;
  padding: 8px 20px;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.blue};

  transition: color 250ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover,
  &:focus {
    color: #ffffff;
    border: none;

    &::before {
      opacity: 1;
    }
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.colors.gradientBlue};
    opacity: 0;
    transition: opacity 250ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  & span {
    z-index: 5;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 129px;
  }
`;

export const HeartIcon = styled(LiaHeart)`
  width: 24px;
  height: 24px;
  color: currentColor;
`;
