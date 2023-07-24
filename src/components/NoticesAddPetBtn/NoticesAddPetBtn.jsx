import React, { useState, useEffect } from 'react';
import {
  StyledNavLink,
  StyledNavLinkWrapper,
  IconWrapper,
  IconWrapperMobill,
} from './NoticesAddPetBtn.styled';
import { AiOutlinePlus } from 'react-icons/ai';

export const NoticesAddPetBtn = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <StyledNavLinkWrapper>
      <StyledNavLink>
        {isMobile ? (
          <IconWrapperMobill>
            <IconWrapper>
              <AiOutlinePlus size={24} color="white" />
            </IconWrapper>
            Add Pet
          </IconWrapperMobill>
        ) : (
          <>
            Add Pet
            <IconWrapper>
              <AiOutlinePlus size={15} color="white" />
            </IconWrapper>
          </>
        )}
      </StyledNavLink>
    </StyledNavLinkWrapper>
  );
};

export default NoticesAddPetBtn;
