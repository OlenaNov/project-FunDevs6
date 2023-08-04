import { styled } from "styled-components";

export const Title = styled.h2`
margin-bottom: 20px;

color: #111;
text-align: center;
font-family: Manrope;
font-size: 24px;
font-weight: 500;
line-height: normal;
letter-spacing: 0.96px;

@media screen and (min-width: 768px) {
margin-bottom: 40px;

font-size: 36px;
letter-spacing: 1.44px;
};
    
@media screen and (min-width: 1280px) {

};
`;

export const Text = styled.p`
margin-bottom: 40px;

color: #111;
text-align: center;
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1.28;
letter-spacing: 0.56px;

@media screen and (min-width: 768px) {
margin-bottom: 41px;

font-size: 20px;
line-height: 1.4;
letter-spacing: 0.8px;
};
    
@media screen and (min-width: 1280px) {

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
    
@media screen and (min-width: 1280px) {

};
`;

export const ButtonLogin = styled.button`
display: flex;
max-width: 240px;
padding: 8px 76px;
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

@media screen and (min-width: 768px) {
width: 165px;
padding: 8px 20px;
};
    
@media screen and (min-width: 1280px) {

};
`;


export const ButtonRegistration = styled.button`
display: inline-flex;
width: 240px;
padding: 9px 69px;
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

@media screen and (min-width: 768px) {
width: 142px;
padding: 8px 20px;
};
    
@media screen and (min-width: 1280px) {

};
`;
