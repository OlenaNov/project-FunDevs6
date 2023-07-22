import styled from 'styled-components';

export const CategoriesListWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  column-gap: 32px;
  row-gap: 24px;
  margin-top: 42px;
  padding: 0;
  margin-bottom: 24px;

  @media screen and (max-width: 760px) {
    margin-top: 24px;
  }

  @media screen and (min-width: 761px) {
    margin-top: 40px;
  }
`;
