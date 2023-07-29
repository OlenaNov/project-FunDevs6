import { Title } from "components/MainDefault/MainDefault.styled";
import { ButtonCancel, ButtonYes, IconYes, WrapperContent } from "./ModalContent.styled";

export const ModalContent = ({ message, fnYes, fnCancel }) => {
 
 return (
    <WrapperContent>
     <Title>{message}</Title>
     <ButtonCancel
        type="button"
        onClick={fnCancel}
     >Cancel</ButtonCancel>
     <ButtonYes
        type="button"
        onClick={fnYes}
     >Yes
     <IconYes />
     </ButtonYes>
    </WrapperContent>
    );
};

export default ModalContent;