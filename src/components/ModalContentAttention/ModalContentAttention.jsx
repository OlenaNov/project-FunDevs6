import { ButtonCancel, ButtonYes, IconYes, Title, Text } from "./ModalContentAttention.styled";

export const ModalContent = ({ fnYes, fnCancel, title, message }) => {
 
 return (
    <>
     <Title>{title}</Title >
     {message && <Text>{message}</Text>}
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
    </>
    );
};

export default ModalContent;