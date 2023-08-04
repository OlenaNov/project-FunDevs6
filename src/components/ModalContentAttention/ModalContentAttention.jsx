import { ButtonLogin, ButtonRegistration, Title, Text } from "./ModalContentAttention.styled";
import { ReactComponent as SvgPow } from '../../images/logo/logo-paw.svg';

export const ModalContent = ({ fnYes, fnCancel, title, message }) => {
 
 return (
    <>
     <Title>{title}</Title >
     {message && <Text>{message}</Text>}
     <ButtonLogin
        type="button"
        onClick={fnCancel}
     >Log IN<SvgPow /></ButtonLogin>
     <ButtonRegistration
        type="button"
        onClick={fnYes}
     >Registration
     </ButtonRegistration>
    </>
    );
};

export default ModalContent;