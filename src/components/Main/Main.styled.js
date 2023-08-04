import { styled } from 'styled-components';
import { theme } from '../../theme/theme';

export const Wrapper = styled.div`
  padding-top: 60px;
  min-height: 100vh;
  position: relative;

  @media screen and (max-width: 767px) {
    max-width: 320px;
  }
`;

export const Title = styled.h1`
  color: #000;
  font-family: Manrope;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.38;
  z-index: 5;

  @media scree and (max-width: 767px) {
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    font-size: 68px;
    line-height: 1.47;
  }

  @media screen and (min-width: 1280px) {
    display: inline-block;
    width: 501px;
    margin-top: 188px;

    font-weight: 800;
    line-height: 1.3;
  }
`;

export const Image = styled.picture`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 98px;
    right: 0;
    width: 917px;
    height: 670px;
    flex-shrink: 0;
  }
`;

export const HeroOneImg = styled.img`
  position: absolute;
  width: 100%;
  top: 111px;
  right: -58px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 100%;
    top: 165px;
    right: -100px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    right: -40px;
    top: -2px;
    width: 50%;
  }

  animation-name: spin1;
  animation-duration: 1000ms;
  animation-timing-function: linear;

  @keyframes spin1 {
    0% {
      scale: 1.5;
      transform: translate(400px, -400px);
    }

    100% {
      scale: 1;
      transform: rotate(360deg);
    }
  }
`;

export const HeroTwoImg = styled.img`
  z-index: -1;
  position: absolute;
  right: 89px;
  top: 245px;
  width: 90%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    right: 235px;
    top: 361px;
    width: 90%;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    right: 248px;
    top: 258px;
    width: 45%;
  }

  animation-name: spin2;
  animation-duration: 1000ms;
  animation-timing-function: linear;

  @keyframes spin2 {
    0% {
      scale: 1.5;
      transform: translate(-600px, 50px);
    }

    100% {
      scale: 1;
      transform: translate(0);
    }
  }
`;

export const HeroThreeImg = styled.img`
  z-index: -1;
  position: absolute;
  right: -89px;
  top: 325px;
  width: 79%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    right: -30px;
    top: 705px;
    width: 60%;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    right: -25px;
    top: 442px;
    width: 30%;
  }

  animation-name: spin3;
  animation-duration: 1000ms;
  animation-timing-function: linear;

  @keyframes spin3 {
    0% {
      scale: 1.5;
      transform: translate(300px, 300px);
    }
    100% {
      scale: 1;
      transform: translate(0);
    }
  }
`;
