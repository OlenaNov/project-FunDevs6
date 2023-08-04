import { ButtonLogin, ButtonRegistration, Title, Text, ButtonWrapper } from "./ModalContentAttention.styled";
import { ReactComponent as SvgPow } from '../../images/logo/logo-paw.svg';

const ModalContentAttention = ({ fnYes, fnCancel, title, message }) => {
 
 return (
    <>
     <Title>{title}</Title >
     {message && <Text>{message}</Text>}
     <ButtonWrapper>
     <ButtonLogin
        type="button"
        onClick={fnCancel}
     >Log IN<SvgPow /></ButtonLogin>
     <ButtonRegistration
        type="button"
        onClick={fnYes}
     >Registration
     </ButtonRegistration>
     </ButtonWrapper>
    </>
    );
};

export default ModalContentAttention;