import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const AnimalCard = styled.div`
  position: relative;
  box-shadow: 3px 8px 14px 0 rgba(136, 198, 253, 0.19);
  border-radius: 0px 0px 40px 40px;
  width: 280px;
  height: 456px;
  &:focus,
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows.secondary};
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 336px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 288px;
  }
`;

export const AnimalImage = styled.img`
  width: 100%;
  height: 290px;
  object-fit: cover;
`;

export const AnimalInfo = styled.div`
  position: absolute;
  top: 248px;
  display: flex;
  gap: 12px;
  left: 50%;
  transform: translateX(-50%);
`;

export const StyledCardButtonBottom = styled.button`
  width: 80px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  padding: 6px 0;
  background-color: ${theme.colors.lightBlue};
  color: ${theme.colors.black};
  font-family: 'Manrope', sans-serif;
  font-size: ${theme.fontSizes[0]};
  border: none;
  border-radius: 15px;
  font-weight: 600;

  &:hover,
  &:focus {
    color: ${theme.colors.white};
    background-color: ${theme.colors.blue};
    svg {
      color: ${theme.colors.white};
    }
  }
`;

export const IconWrapper = styled('div')`
  display: flex;
  align-items: center;
  color: ${theme.colors.blue};
  margin-left: -4px;
`;

export const CategoryBadge = styled.div`
  top: 16px;
  left: 0;
  position: absolute;
  padding: 11px 17px;
  text-align: center;
  background-color: ${theme.colors.lightBlue};
  color: ${theme.colors.black};
  font-family: 'Manrope', sans-serif;
  font-size: ${theme.fontSizes[1]};
  line-height: 10px;
  border-radius: 0 20px 20px 0;
  min-width: 126px;
  font-weight: 600;
  line-height: 10px;
  cursor: pointer;
`;

export const StyledComent = styled.p`
  margin: 20px;
  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${theme.fontSizes[4]};
  line-height: 33px;
`;

export const LearnMore = styled.button`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  bottom: 24px;
  width: 248px;
  background-color: ${theme.colors.white};
  color: ${theme.colors.blue};
  border: 2px solid #54adff;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Manrope', sans-serif;
  font-style: 'SemiBold';
  font-size: ${theme.fontSizes[2]};
  line-height: 22px;
  gap: 12px;
  padding: 9px 0 9px 0;
  cursor: pointer;
  svg {
    display: none;
  }

  transition: color 300ms ${({ theme }) => theme.transition.main},
    background-color 300ms ${({ theme }) => theme.transition.main};

  &.active {
    color: ${theme.colors.white};

    background-color: ${theme.colors.blue};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: ${theme.colors.gradientBlue};
    border-radius: 40px;
    opacity: 0;
    z-index: -1;
    transition: opacity 300ms ${theme.transition.main};
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: transparent;
    border-color: transparent;
  }
`;

export const StyledCardButtonRight = styled.button`
  background-color: ${theme.colors.lightBlue};
  color: ${theme.colors.blue};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.blue};
    color: ${theme.colors.white};
    svg {
      filter: brightness(0) invert(1);
    }
  }
`;

export const RightButtonWrapper = styled.div`
  top: 12px;
  right: 12px;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
