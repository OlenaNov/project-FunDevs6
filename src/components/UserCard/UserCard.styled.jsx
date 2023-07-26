// import { Form } from 'formik';
import styled from 'styled-components';
// import { RxCross1 } from 'react-icons/rx';
// import { ImCross } from 'react-icons/im';
// import { FiEdit3 } from 'react-icons/fi';
// import { theme } from 'theme/theme';

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

export const LabelField = styled.div`
  display: flex;
`;

export const LogOutBtn = styled.button``;
