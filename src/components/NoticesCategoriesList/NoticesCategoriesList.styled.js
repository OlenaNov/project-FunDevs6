import styled from 'styled-components';

export const CategoriesListWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  // justify-content: center;
  margin: 0 auto;
  column-gap: 32px;
  row-gap: 24px;
  margin-top: 42px;
  padding: 0;
  margin-bottom: 24px;

  @media screen and (max-width: 760px) {
    margin-top: 24px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 1248px;
    margin-top: 40px;
  }
`;
