import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogin, selectisRefreshing } from 'redux/auth/auth-selectors';

const PrivateNoticeRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectIsLogin);
  const isRefreshing = useSelector(selectisRefreshing);

  const shouldRedirect = !isLogin && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateNoticeRoute;
