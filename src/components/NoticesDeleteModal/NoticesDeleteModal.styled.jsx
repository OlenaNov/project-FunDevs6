import styled from 'styled-components';
import { LuTrash2 } from 'react-icons/lu';
import { theme } from '../../theme/theme';

export const DeleteModalWrapper = styled.div`
  width: 280px;
  padding-top: 80px;
  padding-right: 12px;
  padding-left: 12px;
  padding-bottom: 60px;
  border-radius: 40px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 60px;
    width: 608px;
  }
`;

export const DeleteModalTitle = styled.div`
  margin-bottom: 14px;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #111111;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 48px;
    font-size: 36px;
    line-height: 49px;
  }
`;

export const DeleteModalText = styled.p`
  margin-bottom: 44px;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.01em;

  & span {
    font-weight: 700;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const DeleteModalButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 17px;
  }
`;

export const DeleteModalCancelBtn = styled.div`
  width: 100%;
  position: relative;
  padding: 9px 20px;
  border: 2px solid ${theme.colors.theme};
  border-radius: 40px;
  background-color: #ffffff;
  background-color: transparent;
  color: ${theme.colors.blue};

  transition: color 250mx ${theme.transition.main};

  &:hover,
  &:focus {
    color: #ffffff;
    border-color: transparent;

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

    background: ${theme.colors.gradientBlue};
    opacity: 0;

    transition: opacity 250ms ${theme.transition.main};
  }

  & span {
    position: relative;
    z-index: 5;
    font-weight: 700;
    font-size: 16px;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 129px;
    padding: 9px 34px;
  }
`;

export const DeleteModalApproveBtn = styled(DeleteModalCancelBtn)`
  border-radius: 40px;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  background-color: ${theme.colors.blue};
  color: #fff;

  transition: background-color 250ms ${theme.transition.main};

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
    background: ${theme.colors.gradientBlue};
    opacity: 0;
    transition: opacity 250mx ${theme.transition.main});
  }

  & span {
    position: relative;
    z-index: 5;
    font-weight: 700;
    font-size: 16px;
  }

  & svg {
    position: relative;
    z-index: 5;
  }

`;

export const NoticesDeleteModalIcon = styled(LuTrash2)`
  color: currentColor;
`;
