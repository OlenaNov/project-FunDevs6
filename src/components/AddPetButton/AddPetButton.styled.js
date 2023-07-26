import styled from '@emotion/styled';
import { theme } from 'theme/theme';
const { fontSizes, colors, breakpoints } = theme;


export const Btn = styled.button`
  position: fixed;
  z-index: 99;
  top: 50%;
  translate: 0 -50%;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  border: none;
  text-decoration: none;
  background: #54adff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  font-family: 'Manrope', sans-serif;
  font-weight: 'Manrope-SemiBold';
  font-size: ${fontSizes[0]}px;

  line-height: 16px;

  color: #FFFFFF;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }

  :hover {
  background: ${colors.gradientBlue};
  }

  @media screen and (${breakpoints.tablet}) {
    position: static;
    margin-top: 60px;
    margin-left: auto;
    gap: 8px;
    flex-direction: row;
    width: 130px;
    background: '#54ADFF';
    border-radius: 40px;
    height: 40px;

  font-weight: 'Manrope-Bold';
    font-size: ${fontSizes[2]}px;
    line-height: 22px;
  }
`;