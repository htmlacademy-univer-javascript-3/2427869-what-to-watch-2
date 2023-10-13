import { Navigate } from 'react-router-dom';
import { AuthStatus, AppRoutes } from '../../constants/consts';
import MyList from '../../pages/my-list/my-list';

interface IPrivateRouteMyListPageProps {
    authStatus: AuthStatus;
}

function PrivateRouteMyListPage(props: IPrivateRouteMyListPageProps) {
  if (props.authStatus === AuthStatus.NotAuth) {
    return <Navigate to={AppRoutes.Login} />;
  }
  return <MyList/>;
}

export default PrivateRouteMyListPage;
