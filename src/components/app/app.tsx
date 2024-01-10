import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import NotFound404 from '../../pages/not-found-404/not-found-404';
import MoviePage from '../../pages/movie-page/movie-page';
import Player from '../../pages/player/player';
import { AppRoutes } from '../../constants/consts';
import PrivateRouteMyListPage from '../private-route-my-list-page/private-route-my-list-page';
import MoviePageOverview from '../../pages/movie-page-overview/movie-page-overview';
import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import {
  fetchMovies,
  fetchMyListMovies,
  fetchProfileData,
} from '../../store/slices/fimls.thunks';
import PrivateRouteLogin from '../private-route-login/private-route-login';
import PrivateRouteAddReview from '../private-route-add-review/private-route-add-review';

function App() {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem('wtw-token');

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      dispatch(fetchProfileData());
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (token) {
      dispatch(fetchMyListMovies());
    }
  }, [dispatch, token]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main}>
          <Route index element={<Main />} />
          <Route path={AppRoutes.Login} element={<PrivateRouteLogin />} />
          <Route path={AppRoutes.MyList} element={<PrivateRouteMyListPage />} />
          <Route path={`${AppRoutes.Movie}`} element={<MoviePage />}>
            <Route path={AppRoutes.Movie} element={<MoviePageOverview />} />
          </Route>
          <Route path={AppRoutes.Player} element={<Player />} />
          <Route
            path={AppRoutes.AddReview}
            element={<PrivateRouteAddReview />}
          />
          <Route path={AppRoutes.NotFound} element={<NotFound404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
