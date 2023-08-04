import { ButtonCancel, ButtonWrapper, ButtonYes, IconYes, Title } from "./ModalContentLeaving.styled";

export const ModalContent = ({ fnYes, fnCancel, title }) => {
 
 return (
    <>
     <Title>{title}</Title >
      <ButtonWrapper>
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
      </ButtonWrapper>
    </>
    );
};

export default ModalContent;