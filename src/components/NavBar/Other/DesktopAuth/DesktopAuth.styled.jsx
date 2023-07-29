import styled from 'styled-components';

export const AuthListDesktop = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    /* margin: 0 auto; */
    /* display: block; */
    position: static;
    flex-direction: row;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: center;
    flex-direction: row;

    align-items: center;
    gap: 20px;
    transform: none;
    background-color: transparent;
  }
`;

export const AuthItemDesktop = styled.li``;

export const LogInDesktop = styled.button`
  @media screen and (min-width: 768px) {
    width: 165px;
    padding: 8px 20px;
    border-radius: 40px;
    border: 2px solid #ffc107;
    background: #ffc107;

    color: #fef9f9;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.64px;
  }

  &:hover {
    animation: jello-horizontal 0.9s both;
  }

  @keyframes jello-horizontal {
    0% {
      transform: scale3d(1, 1, 1);
    }

    30% {
      transform: scale3d(1.25, 0.75, 1);
    }

    40% {
      transform: scale3d(0.75, 1.25, 1);
    }

    50% {
      transform: scale3d(1.15, 0.85, 1);
    }

    65% {
      transform: scale3d(0.95, 1.05, 1);
    }

    75% {
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }
`;

export const RegistrDesktop = styled.button`
  @media screen and (min-width: 768px) {
    width: 165px;
    padding: 8px 20px;
    border-radius: 40px;
    border: 2px solid #ffc107;
    background: transparent;

    color: #ffc107;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.64px;
  }
  &:hover {
    animation: jello-horizontal 0.9s both;
  }

  @keyframes jello-horizontal {
    0% {
      transform: scale3d(1, 1, 1);
    }

    30% {
      transform: scale3d(1.25, 0.75, 1);
    }

    40% {
      transform: scale3d(0.75, 1.25, 1);
    }

    50% {
      transform: scale3d(1.15, 0.85, 1);
    }

    65% {
      transform: scale3d(0.95, 1.05, 1);
    }

    75% {
      transform: scale3d(1.05, 0.95, 1);
    }

    100% {
      transform: scale3d(1, 1, 1);
    }
  }
`;
