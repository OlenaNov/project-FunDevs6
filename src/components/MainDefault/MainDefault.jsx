import { Image, Title, Wrapper } from "./MainDefault.styled";
import ImageMainDefault from  "../../images/main-default/pets-mobile@1x.png";


export const MainDefault = () => {
 
 return (
    <Wrapper>
       <Title>Take good care of your small pets</Title>
       <Image src={ImageMainDefault} alt="Pets" />
    </Wrapper>
  );
};

export default MainDefault;
