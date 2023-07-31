import styled from 'styled-components';

export const DeskLogOutBtn = styled.button`
  color: #fef9f9;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
  margin-right: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  border: none;
  outline: none;
  font-family: inherit;
  cursor: pointer;
  background-color: #54adff;
  width: 135px;
  padding: 8px 20px;

  gap: 8px;

  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }
  

  @media (max-width: 1200px) {
    display: none;
  }
`;
