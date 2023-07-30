import { styled } from "styled-components";


export const Wrapper = styled.div`
padding: 60px 20px 0;
width: 100%;
height: 100%;

@media screen and (min-width: 1280px) {

display: flex;
gap: 70px;
align-items: center;
};

`;


export const Title = styled.h1`
color: #000;
font-family: Manrope;
font-size: 32px;
font-weight: 700;
line-height: 1.38;

@media screen and (min-width: 768px) {

font-size: 68px;
line-height: 1.47;
};

@media screen and (min-width: 1280px) {

font-weight: 800;
line-height: 1.3;
};

`;

