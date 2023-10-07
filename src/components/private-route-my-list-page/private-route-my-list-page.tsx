import { Navigate } from 'react-router-dom';
import { AuthStatus, AppRoutes } from '../../constants/consts';
import { ReactNode } from 'react';

interface IPrivateRouteMyListPageProps {
    authStatus: AuthStatus;
    element: ReactNode;
}

function PrivateRouteMyListPage(props: IPrivateRouteMyListPageProps) {
  if (props.authStatus === AuthStatus.NotAuth) {
    return <Navigate to={AppRoutes.Login} />;
  }
  return props.element;
}

export default PrivateRouteMyListPage;
