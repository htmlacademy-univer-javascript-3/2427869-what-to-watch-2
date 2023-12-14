import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../constants/consts';
import MyList from '../../pages/my-list/my-list';

function PrivateRouteMyListPage() {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to={AppRoutes.Login} />;
  }

  return <MyList />;
}

export default PrivateRouteMyListPage;
