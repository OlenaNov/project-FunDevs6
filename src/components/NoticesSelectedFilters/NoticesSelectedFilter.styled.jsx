import styled from 'styled-components';
import { IoCloseOutline } from 'react-icons/io5';
import { theme } from '../../theme/theme';

export const Filters = styled.div`
  margin-right: 12px;
  @media screen and (max-width: 767px) {
    margin-top: 80px;
    max-width: 140px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    justify-items: flex-start;
    justify-self: flex-start;
  }
`;

export const FilterList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-end;
  list-style: none;

  @media screen and (min-witdh: ${theme.breakpoints.tablet}) {
    width: 100%;
    max-width: 100%;
  }
`;

export const SelectedFilterBtn = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
`;

export const SelectedFilterBtnLabel = styled.span`
  font-family: 'Inter';
  font-size: 12px;
  line-height: 14px;
  color: ${theme.colors.blue};
`;

export const SelectedFilterBtnIcon = styled(IoCloseOutline)`
  color: ${theme.colors.blue};
  width: 16px;
  height: 16px;
  transition: 250ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover,
  &:focus {
    transform: scale(1.2);
    stroke: ${theme.colors.yellow};
  }
`;
