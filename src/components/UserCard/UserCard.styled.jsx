import { Form } from 'formik';
import styled from 'styled-components';
import { RxCross1 } from 'react-icons/rx';
import { FiEdit3 } from 'react-icons/fi';
import { BsCamera } from 'react-icons/bs';
import { theme } from 'theme/theme';

// export const UserInfo = styled.div`
//   @media screen and min-width: 480px {
//     display: flex;
//     flex-direction: row-reverse;
//     justify-content: space-between;
//     @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
//       display: block;
//     }
//   }
// `;

// export const StylizedForm = styled(Form)`
//   @media screen and (min-width: ${({ theme }) =>
//       theme.breakpoints.tablet}) max-width: ${({ theme }) =>
//       theme.breakpoints.desktop} {
//     width: 182px;
//   }
// `;

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

export const UserInfo = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      display: block;
    }
  }
`;

export const StylizedForm = styled(Form)`
  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet}) and (max-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    width: 182px;
  }
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Avatar = styled.img`
  width: 182px;
  height: 182px;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ theme }) => theme.space[0] + 'px'};
  margin-bottom: ${({ theme }) => theme.space[0] + 'px'};
  border-radius: 40px;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  color: #111111;

  display: flex;
  align-items: center;
  /* justify-content: center; */
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const LabelField = styled.div`
  display: flex;
`;

export const EditIcon = styled.div`
  display: block;
  position: absolute;
  top: 3%;
  right: 3%;
`;

export const Icon = styled(RxCross1)`
  width: 24px;
  height: 24px;
  fill: ${theme.colors.blue};
  stroke: ${theme.colors.blue};
`;

export const IconEdit = styled(FiEdit3)`
  width: 24px;
  height: 24px;
  fill: ${theme.colors.blue};
  stroke: ${theme.colors.blue};
`;

export const IconEditPhoto = styled(BsCamera)`
  width: 24px;
  height: 24px;
  fill: ${theme.colors.blue};
  stroke: ${theme.colors.blue};
`;

export const EditInpuButton = styled.div`
  position: absolute;
  overflow: visible;
  right: ${({ theme }) => theme.space[2] * 3 + 'px'};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space[0] + 'px'};
  margin: ${({ theme }) => theme.space[0] + 'px'};
  background: transparent;
  border: none;
`;

export const ButtonSave = styled.button``;
