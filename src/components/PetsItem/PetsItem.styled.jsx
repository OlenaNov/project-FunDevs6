import { styled } from 'styled-components';

export const ContainerPet = styled('div')`
  margin-top: 24px;
  border-radius: 40px;
  min-width: 950px;
  height: 200px;
  padding: 20px;
  background: white;
  margin-left: -260px;
  box-shadow: 3px 8px 14px 0 rgba(136, 198, 253, 0.19);
  &:focus,
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows.secondary};
  }

  @media screen and (max-width: 746px) {
    display: table-cell;
    min-width: 280px;
    height: 100%;
  }

  @media screen and (min-width: 747px) and (max-width: 1399px) {
    display: table-cell;
    justify-content: center;
    min-width: 800px;
  }
`;

export const Img = styled('img')`
  display: flex;
  justify-content: center;
  width: 160px;
  height: 160px;
  border-radius: 40px;

  @media screen and (max-width: 746px) {
    width: 240px;
    height: 240px;
    margin-bottom: 20px;
  }
`;

export const ContainerPetWrapper = styled('div')`
  display: flex;
  position: relative;

  @media screen and (max-width: 746px) {
    display: table-cell;
  }
`;

export const ContainerPetInfo = styled('div')`
  margin-left: 32px;
`;

export const InfoPet = styled('div')`
  margin-bottom: 10px;
`;

export const InfoPetTitle = styled('div')`
  font-size: 16px;
  font-weight: bold;
`;

export const IconWrapper = styled('svg')`
  position: absolute;
  top: 0;
  right: 0;
  transition: translate(-50px, 50px);

  @media screen and (max-width: 746px) {
    position: absolute;
    top: 255px;
    left: 220px;
  }
`;

export const Title = styled.div`
  margin-top: 30px;
  font-size: 24px;
`;
