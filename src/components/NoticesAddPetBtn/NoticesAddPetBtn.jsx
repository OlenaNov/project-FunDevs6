import {
  StyledNavLink,
  StyledNavLinkWrapper,
  IconWrapper,
} from './NoticesAddPetBtn.styled';
import { AiOutlinePlus } from 'react-icons/ai';

export const NoticesAddPetBtn = () => {
  return (
    <StyledNavLinkWrapper>
      <StyledNavLink>
        Add Pet
        <IconWrapper>
          <AiOutlinePlus size={15} color="white" />
        </IconWrapper>
      </StyledNavLink>
    </StyledNavLinkWrapper>
  );
};

export default NoticesAddPetBtn;
