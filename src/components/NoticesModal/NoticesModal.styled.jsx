import styled from 'styled-components';
import { IoCloseOutline } from 'react-icons/io5';

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1200;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(97, 97, 97, 0.6);
  backdrop-filter: blur(4px);
  overflow-y: scroll;
`;

export const Modal = styled.div`
  min-height: 200px;
  min-width: 200px;
  border-radius: 20px;
  position: absolute;
  top: 10%;
  background-color: #fff;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const CloseBtn = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  position: absolute;
  right: 12px;
  top: 12px;
  line-height: 0;
  background: transparent;
  color: black;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    right: 24px;
    top: 24px;
  }
`;

export const CloseBtnIcon = styled(IoCloseOutline)`
  color: ${({ theme }) => theme.colors.blue};
  width: 30px;
  height: 30px;
  transition: color 250ms ${({ theme }) => theme.transition.main};

  &:hover,
  &focus {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;
