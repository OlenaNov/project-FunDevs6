import {
  AuthListDesktop,
  AuthItemDesktop,
  LogInDesktop,
  RegistrDesktop,
} from './DesktopAuth.styled';

export const DesktopAuth = () => {
  return (
    <AuthListDesktop>
      <AuthItemDesktop>
        <LogInDesktop type="button">Log IN</LogInDesktop>
      </AuthItemDesktop>
      <AuthItemDesktop>
        <RegistrDesktop type="button">Registration</RegistrDesktop>
      </AuthItemDesktop>
    </AuthListDesktop>
  );
};

export default DesktopAuth;
