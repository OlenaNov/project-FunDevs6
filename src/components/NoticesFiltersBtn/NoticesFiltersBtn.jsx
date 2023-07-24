import React, { useState, useEffect } from 'react';
import {
  StyledNavLink,
  StyledNavLinkWrapper,
  IconWrapper,
} from './NoticesFiltersBtn.styled';
import { FiFilter } from 'react-icons/fi';

export const NoticesFiltersBtn = () => {
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
          <IconWrapper>
            <FiFilter size={15} />
          </IconWrapper>
        ) : (
          <>
            Filter
            <IconWrapper>
              <FiFilter size={15} />
            </IconWrapper>
          </>
        )}
      </StyledNavLink>
    </StyledNavLinkWrapper>
  );
};

export default NoticesFiltersBtn;
