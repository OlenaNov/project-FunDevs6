import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const CategoriesListWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  // justify-content: space-between;
  margin: 0 auto;
  column-gap: 32px;
  row-gap: 24px;
  margin-top: 40px;
  padding: 0;
  margin-bottom: 40px;

  @media screen and (max-width: 760px) {
    margin-top: 24px;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 60px;
    flex-direction: row;
  }

  @media screen and (min-width: ${theme.breakpoints
      .tablet}) and (max-width: 1279px) {
    padding-right: 15px;
    padding-left: 15px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 1248px;
    margin-bottom: 68px;
  }
`;
