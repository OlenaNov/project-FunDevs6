import {
  StyledNavLink,
  StyledNavLinkWrapper,
  IconWrapper,
} from './NoticesFiltersBtn.styled';
import { FiFilter } from 'react-icons/fi';

export const NoticesFiltersBtn = () => {
  return (
    <StyledNavLinkWrapper>
      <StyledNavLink>
        Filter
        <IconWrapper>
          <FiFilter size={15}  />
        </IconWrapper>
      </StyledNavLink>
    </StyledNavLinkWrapper>
  );
};

export default NoticesFiltersBtn;
