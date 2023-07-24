import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import bg_mobile from '../../images/background/bg-mobile@1x.png';
import bg_tablet from '../../images/background/bg-tablet@1x.png';
import bg_desktop from '../../images/background/bg-desktop@1x.png';

export const FormContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 58px);
  background-image: url(${bg_mobile});
  background-repeat: space repeat;
  background-size: contain;
  background-position-y: center;
  padding-top: 20px;

  @media (min-width: 768px) {
    background-image: url(${bg_tablet});
    /* padding-top: 92px; */
    padding-top: 60px;
    padding-bottom: 268px;
    min-height: calc(100vh - 64px);
  }
  @media (min-width: 1280px) {
    background-image: url(${bg_desktop});
    padding-top: 40px;
    padding-bottom: 147px;
  }
`;
