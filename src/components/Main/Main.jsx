import {
  Title,
  Wrapper,
  HeroOneImg,
  HeroTwoImg,
  HeroThreeImg,
} from './Main.styled';
// import ImgMobileWebp from  "../../images/main-default/pets-mobile_1x.webp";
// import ImgMobileWebp2x from  "../../images/main-default/pets-mobile_2x.webp";
// import ImgMobilePng from  "../../images/main-default/pets-mobile@1x.png";
// import ImgMobilePng2x from  "../../images/main-default/pets-mobile@2x.png";
// import ImgTabletWebp from  "../../images/main-default/pets-tablet_1x_1.webp";
// import ImgTabletWebp2x from  "../../images/main-default/pets-tablet_2x_1.webp";
// import ImgTabletPng from  "../../images/main-default/pets-tablet@1x.png";
// import ImgTabletPng2x from  "../../images/main-default/pets-tablet@2x.png";
// import ImgDesktopWebp from  "../../images/main-default/pets-desktop_1x.webp";
// import ImgDesktopWebp2x from  "../../images/main-default/pets-desktop_2x.webp";
// import ImgDesktopPng from  "../../images/main-default/pets-desktop@1x.png";
// import ImgDesktopPng2x from  "../../images/main-default/pets-desktop@2x.png";

import Dog from '../../images/background/dog1-bcg.png';
import Dog2 from '../../images/background/dog2-bcg.png';
import Cat from '../../images/background/cat1-bcg.png';

export const MainDefault = () => {
  return (
    <>
      <Wrapper>
        <Title>Take good care of your small pets</Title>
        {/* <Image>
            <source
               srcSet={(ImgDesktopWebp, ImgDesktopWebp2x)}
               media="(min-width: 1200px)"
               type="image/webp"
            />
            <source
               srcSet={(ImgDesktopPng, ImgDesktopPng2x)}
               media="(min-width: 1200px)"
            />
            <source
               srcSet={(ImgTabletWebp, ImgTabletWebp2x)}
               media="(min-width: 768px)"
               type="image/webp"
            />
            <source
               srcSet={(ImgTabletPng, ImgTabletPng2x)}
               media="(min-width: 768px)"
            />
            <source
               srcSet={(ImgMobileWebp, ImgMobileWebp2x)}
               media="(max-width: 767px)"
               type="image/webp"
            />
            <source
               srcSet={(ImgMobilePng, ImgMobilePng2x)}
               media="(max-width: 767px)"
            />
            <img src={(ImgMobilePng)} alt="Pets" />
         </Image> */}
        <HeroOneImg src={Dog} alt="dog" />
        <HeroTwoImg src={Dog2} alt="dog2" />
        <HeroThreeImg src={Cat} alt="cat" />
      </Wrapper>
    </>
  );
};

export default MainDefault;
