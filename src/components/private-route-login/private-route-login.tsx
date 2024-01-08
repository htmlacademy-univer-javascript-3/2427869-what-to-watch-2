import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../constants/consts';
import SignIn from '../../pages/sign-in/sign-in';

function PrivateRouteLogin() {
  const token = localStorage.getItem('wtw-token');

  if (token) {
    return <Navigate to={AppRoutes.Main} />;
  }

  return <SignIn />;
}

export default PrivateRouteLogin;
