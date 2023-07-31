import styled from 'styled-components';

export const TitleMain = styled.h2`
  text-align: center;
  font-size: 48px;
  margin-bottom: 36px;
  margin-top: 60px;
  font-family: Manrope-Bold;

  @media screen and (max-width: 747px) {
    font-size: 24px;
    margin-bottom: 24px;
    margin-top: 40px;
  }
`;

export const List = styled.ul`
  margin-top: 24px;
  margin-bottom: 60px;

  @media screen and (min-width: 748px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Item = styled.li`
  text-align: center;
  border-radius: 40px;
  padding: 16px;
  box-shadow: 3px 8px 14px 0 rgba(136, 198, 253, 0.19);
  background-color: #ffffff;
  width: 280px;
  height: 239px;
  margin-left: auto;
  margin-right: auto;
  &:focus,
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows.secondary};
  }

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 275px;
    margin: 16px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
    height: 287px;
    margin: 16px;
  }
`;

export const Title = styled.a`
  font-size: 20px;
  font-weight: 700;
  color: #54adff;
  text-decoration: none;
`;

export const ImgThumb = styled.div`
  margin-right: 12px;
  margin-top: 16px;
  @media screen and (max-width: 747px) {
    width: 100px;
  }

  @media screen and (min-width: 748px) and (max-width: 1279px) {
    width: 140px;
  }

  @media screen and (min-width: 1280px) {
    width: 146px;
  }
`;

export const Contacts = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #111111;
  margin-top: 12px;

  @media screen and (min-width: 748px) and (max-width: 1279px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const WrapperCard = styled.div`
  display: flex;
`;

export const WrapperInfo = styled.div`
  text-align: left;
  padding: 0px;
`;

export const ContactTitle = styled.div`
  margin: 0px;
  font-size: 12px;
  font-family: Manrope-Bold;

  @media screen and (min-width: 767px) {
    font-size: 16px;
  }
`;

export const ContactsLink = styled.a`
  text-decoration: none;
  font-size: 12px;
  font-weight: 500;
  color: #111111;
  transition: color 150ms ease-in;

  &:hover,
  &:focus {
    color: #54adff;
  }

  @media screen and (min-width: 748px) and (max-width: 1279px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;
