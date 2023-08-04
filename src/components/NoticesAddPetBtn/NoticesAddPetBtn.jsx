import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { isUserLogin } from '../../redux/auth/auth-selectors';
import {
  StyledNavLink,
  StyledNavLinkWrapper,
  IconWrapper,
  IconWrapperMobill,
} from './NoticesAddPetBtn.styled';
import { AiOutlinePlus } from 'react-icons/ai';

export const NoticesAddPetBtn = ({ onAttention }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const isLoggedIn = useSelector(isUserLogin);
  const [path, setPath] = useState('/add-pet');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleAddPetClick = () => {
    if (!isLoggedIn) {
      onAttention();
      return;
    }
  };

  useEffect(() => {
    isLoggedIn ? setPath('/add-pet') : setPath('');
  }, [isLoggedIn]);

  return (
    <StyledNavLinkWrapper>
      <StyledNavLink to={path} onClick={handleAddPetClick}>
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