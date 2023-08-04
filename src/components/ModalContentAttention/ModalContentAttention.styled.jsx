import { styled } from "styled-components";

export const Title = styled.h2`
color: #111;
text-align: center;
font-family: Manrope;
font-size: 24px;
font-weight: 500;
line-height: normal;
letter-spacing: 0.96px;
`;

export const Text = styled.p`
color: #111;
text-align: center;
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1.28;
letter-spacing: 0.56px;
`;

export const ButtonLogin = styled.button`
display: flex;
max-width: 240px;
padding: 8px 78px;
justify-content: center;
align-items: center;
gap: 8px;

border-radius: 40px;
border: 2px solid #FFC107;
background: #FFC107;

color: #FEF9F9;
font-family: Manrope;
font-size: 16px;
font-weight: 700;
line-height: normal;
letter-spacing: 0.64px;
`;


export const ButtonRegistration = styled.button`
display: inline-flex;
padding: 7px 69px;
justify-content: center;
align-items: center;
gap: 10px;

border-radius: 40px;
border: 2px solid #FFC107;

color: #FFC107;
font-family: Manrope;
font-size: 16px;
font-weight: 600;
line-height: normal;
letter-spacing: 0.64px;
`;
