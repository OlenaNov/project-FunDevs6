import {
  AuthListDesktop,
  AuthItemDesktop,
  LogInDesktop,
  RegistrDesktop,
} from './DesktopAuth.styled';
import { Link } from 'react-router-dom';

export const DesktopAuth = () => {
  return (
    <AuthListDesktop>
      <AuthItemDesktop>
        <Link to="/login">
          <LogInDesktop type="button">Log IN</LogInDesktop>
        </Link>
      </AuthItemDesktop>
      <AuthItemDesktop>
        <Link to="/register">
          <RegistrDesktop type="button" to="/register">
            Registration
          </RegistrDesktop>
        </Link>
      </AuthItemDesktop>
    </AuthListDesktop>
  );
};

export default DesktopAuth;
