import { styled } from "styled-components";
import { CiLogout } from 'react-icons/ci';

export const Title = styled.h2`
margin-bottom: 44px;
color: #111;
text-align: center;
font-family: Manrope;
font-size: 24px;
font-weight: 700;
line-height: normal;
letter-spacing: 0.96px;

@media screen and (min-width: 768px) {
margin-bottom: 48px;
    
font-size: 36px;
letter-spacing: 1.44px;
};
`;

export const ButtonWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 12px;

@media screen and (min-width: 768px) {
    justify-content: center;
    flex-direction: row;
    gap: 20px;
};

`;

export const ButtonCancel = styled.button`
display: flex;
margin-bottom: 8px;
max-width: 256px;
padding: 8px 20px;
justify-content: center;
align-items: center;
gap: 8px;
flex-shrink: 0;

border-radius: 40px;
border: 2px solid #54ADFF;
background-color: inherit;

color: #54ADFF;
font-family: Manrope;
font-size: 16px;
font-weight: 700;
line-height: normal;
letter-spacing: 0.64px;

@media screen and (min-width: 768px) {
    width: 165px;
    padding: 12px 20px;
    };
`;


export const ButtonYes = styled.button`
display: flex;
max-height: 256px;
padding: 8px 20px;
justify-content: center;
align-items: center;
gap: 8px;

border: 2px solid #54ADFF;
border-radius: 40px;
background: #54ADFF;

color: #FEF9F9;
font-family: Manrope;
font-size: 16px;
font-weight: 700;
line-height: normal;
letter-spacing: 0.64px;

@media screen and (min-width: 768px) {
    width: 165px;
    padding: 8px 20px;
    };
`;


export const IconYes = styled(CiLogout)`
width: 24px;
height: 24px;
flex-shrink: 0;
fill: #FEF9F9;
`;