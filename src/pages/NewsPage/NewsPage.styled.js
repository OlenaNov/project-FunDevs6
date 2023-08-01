import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;

  font-size: ${({ theme }) => theme.fontSizes[4]};

  line-height: 1.375;

  margin: 0;

  padding: 40px 0 24px 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[7]};
    padding: 80px 0 40px 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[7]};
    padding: 80px 0 0 0;
  }
`;

export const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1 1 auto;
  align-content: stretch;
`;

export const Wrapper = styled.div`
  /* Стилі для обгортки пагінації */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const Pagination = styled.ul`
  /* Стилі для пагінації */
  display: flex;
  justify-content: center;
  list-style: none;
  cursor: pointer;
  gap: 7px;
  padding: 12px 8px;
  background: #fef9f9;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 45px;
`;

export const PaginationButton = styled.a`
  /* Стилі для кнопок пагінації */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  color: #cce4fb;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  border: 1px solid #cce4fb;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #54adff;
    border-color: #54adff;
    color: #fef9f9;
  }
`;

export const ActivePaginationButton = styled(PaginationButton)`
  /* Стилі для активної кнопки пагінації */
  background-color: #54adff;
  border-color: #54adff;
  color: #fef9f9;
`;
