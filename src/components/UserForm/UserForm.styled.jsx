import { Field, Form } from 'formik';
import styled from 'styled-components';
// import { RxCross1 } from 'react-icons/rx';
import { ImCross } from 'react-icons/im';
import { RxCross2 } from 'react-icons/rx';

import { FiEdit3 } from 'react-icons/fi';
import { BsCamera } from 'react-icons/bs';
import { BsCheck2 } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';
import { theme } from 'theme/theme';

export const StylizedForm = styled(Form)`
  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet}) and (max-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    /* width: 182px; */
    /* display: flex;
    flex-direction: row-reverse; */
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    /* display: flex;
    flex-direction: column;
    align-content: space-between;
    gap: 5px; */
  }

  /* display: flex; */
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

export const UserInfoWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    gap: ${({ isEditing }) => (!isEditing ? '59px' : '21px')};
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet}) and (max-width: 1279px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    align-content: center;
    gap: 71px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    gap: ${({ isEditing }) => !isEditing && '63px'};
  }
`;

export const EditPhotoButton = styled.button`
  margin: 0 auto;
  border: none;
  background-color: transparent;
  margin-top: 14px;
  display: flex;
  gap: 8px;
  align-items: center;
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

export const ButtonSave = styled.button`
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding: 5px 0;
    max-height: 34px;
    width: 255px;
    font-size: 16px;
    margin-left: 90px;
  }
  /* max-width: 255px; */
  width: 100%;
  gap: 8px;
  padding: 6px 0;
  /* margin-top: 10px; */
  color: #ffffff;
  background-color: #54adff;
  border-radius: 40px;
  border: none;
  outline: none;
  font-family: inherit;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  cursor: pointer;

  :hover {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }
  span {
    font-size: 14px;
  }
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  color: #111111;

  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 18px;
    line-height: 25px;
  }

  :not(:first-child) {
    height: 32px;
    width: 190px;
    border: 1px solid ${theme.colors.blue};
    border-radius: 20px;

    @media screen and (min-width: 768px) {
      width: 255px;
    }

    & input {
      padding: 4px 12px 4px 12px;
    }
  }
`;

export const FieldStyled = styled(Field)`
  padding: 4px 12px;
  width: 190px;
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

export const ButtonSubmitPhoto = styled(AiOutlineCheck)`
  width: 24px;
  height: 24px;
  fill: ${theme.colors.blue};
  stroke: ${theme.colors.blue};
`;

export const IconCheckPhotoNo = styled(RxCross2)`
  width: 24px;
  height: 24px;
  color: #f43f5e;
`;

export const IconConfirmBox = styled.div`
  margin-top: 14px;
  display: flex;
  gap: 8px;
`;

export const EditPhotoWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const AvatarSection = styled.div`
  /* height: 245px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: ${({ isEditing }) => isEditing && '25px'};
  }
  /* margin-bottom: 14px; */
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    gap: 16px;

    :last-child {
      gap: 0;
    }

    font-weight: 14px;
  }
  @media screen and (min-width: 768px) {
    gap: 10px;
  }
  @media screen and (min-width: 1280px) {
    /* gap: 10px; */
  }
`;

export const ErrorMessageStyled = styled.div`
  /* color: red; */
`;
