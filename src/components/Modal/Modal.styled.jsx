import styled from "styled-components";
import { MdOutlineClose } from 'react-icons/md';

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: background: rgba(97, 97, 97, 0.60);
    backdrop-filter: blur(4px);
    z-index: 1200;
`;

export const ModalWrapper = styled.div`
position: relative;

display: flex;
flex-direction: column;
justify-content: center;
padding: 60px 20px;
max-width: 280px;
height: 302px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
`;


export const ButtonClose = styled.button`
position: absolute;
top: 12px;
right: 12px;
border: none;
background-color: #fff;
flex-shrink: 0;
`;

export const IconClose = styled(MdOutlineClose)`
width: 24px;
height: 24px;
fill: #54ADFF;
`;