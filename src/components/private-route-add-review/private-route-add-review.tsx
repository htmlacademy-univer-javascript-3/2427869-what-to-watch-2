import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../constants/consts';
import AddReview from '../../pages/add-review/add-review';

function PrivateRouteAddReview() {
  const token = localStorage.getItem('wtw-token');

  if (!token) {
    return <Navigate to={AppRoutes.Login} />;
  }

  return <AddReview />;
}

export default PrivateRouteAddReview;
