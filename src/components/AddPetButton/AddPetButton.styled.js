import styled from '@emotion/styled';

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

  line-height: 16px;

  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }

  :hover {
  }

  @media screen and () {
    position: static;
    margin-top: 60px;
    margin-left: auto;
    gap: 8px;
    flex-direction: row;
    width: 130px;

    border-radius: 40px;
    height: 40px;

    line-height: 22px;
  }
`;
