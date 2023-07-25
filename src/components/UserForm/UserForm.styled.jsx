import { Form } from 'formik';
import styled from 'styled-components';
// import { RxCross1 } from 'react-icons/rx';
import { ImCross } from 'react-icons/im';
import { FiEdit3 } from 'react-icons/fi';
import { BsCamera } from 'react-icons/bs';
import { BsCheck2 } from 'react-icons/bs';
// import { BsCamera } from 'react-icons/bs';
import { theme } from 'theme/theme';

export const StylizedForm = styled(Form)`
  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet}) and (max-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    width: 182px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

export const EditIcon = styled.div`
  display: block;
  position: absolute;
  top: 3%;
  right: 3%;
`;

export const Icon = styled(ImCross)`
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

export const IconCheckPhoto = styled(BsCheck2)`
  width: 24px;
  height: 24px;
  fill: ${theme.colors.blue};
  stroke: ${theme.colors.blue};
`;

// export const IconCheckPhoto = styled(BsCheck2)``;

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

  :not(:first-child) {
    height: 32px;
    width: 255px;
    border: 1px solid ${theme.colors.blue};
    border-radius: 20px;
  }

  /* div:nth-child(n) {
    border: 1px solid transparent;
  } */
`;

export const Avatar = styled.img`
  display: block;
  width: 182px;
  height: 182px;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ theme }) => theme.space[0] + 'px'};
  margin-bottom: ${({ theme }) => theme.space[0] + 'px'};
  border-radius: 40px;
`;

export const IconEditPhoto = styled(BsCamera)`
  width: 24px;
  height: 24px;
  fill: ${theme.colors.blue};
  stroke: ${theme.colors.blue};
`;

export const EditPhotoWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const AvatarSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 14px;
`;

export const FormSection = styled.div`
  /* @media screen and (min-width: ${({ theme }) =>
    theme.breakpoints.desktop}) {
    
  } */
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
