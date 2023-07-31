import styled from 'styled-components';
import { CiLogout } from 'react-icons/ci';

export const LogOutBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  border: none;
  outline: none;
  font-family: inherit;
  cursor: pointer;
  background-color: #54adff;
  color: ${({ theme }) => theme.colors.white};
  width: 135px;
  padding: 8px 20px;

  gap: 8px;
  margin: 21px 0 0 2px;

  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.35;
  letter-spacing: 0.04em;

  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }
`;

export const IconExit = styled(CiLogout)`
  width: 17px;
  height: 16px;
  fill: ${({ theme }) => theme.colors.white};
`;
