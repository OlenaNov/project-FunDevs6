import { styled } from 'styled-components';

export const ContainerPet = styled('div')`
  position: relative;
  margin-top: 24px;
  border-radius: 40px;
  height: 200px;
  padding: 20px;
  background: white;
  box-shadow: 3px 8px 14px 0 rgba(136, 198, 253, 0.19);
  &:focus,
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows.secondary};
  }

  @media screen and (max-width: 746px) {
    display: table-cell;
    min-width: 280px;
    height: 100%;
    margin-left: 0;
  }

  @media screen and (min-width: 747px) and (max-width: 1279px) {
    display: flex;
    min-width: 700px;
    margin-left: 0;
  }
  @media screen and (min-width: 1280px) and (max-width: 1399px) {
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
  width: 24px;
  height: 24px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;

  @media screen and (max-width: 746px) {
    position: absolute;
    top: 272px;
    right: 16px;
  }
`;

export const Title = styled.div`
  margin-top: 30px;
  font-size: 24px;
`;
