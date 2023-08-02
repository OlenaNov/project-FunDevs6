import styled from 'styled-components';

export const UserMobContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 16px;
  margin-bottom: auto;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

export const UserMobBtn = styled.button`
  border-style: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserMobName = styled.span`
  color: #ffc107;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.64px;

  @media (min-width: 768px) {
    display: none;
  }
`;
