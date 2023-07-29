import styled from 'styled-components';

export const NoticesNotFoundTitle = styled.h2`
  margin-top: 30px;
  text-align: center;
  fonts-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: ${({ theme }) => theme.fontSizes[4]};
`;

export const NoticesNotFoundImage = styled.img`
  width: 400px;
  margin: 0 auto;
`;
