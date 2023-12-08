import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import NotFound404 from '../../pages/not-found-404/not-found-404';
import MoviePage from '../../pages/movie-page/movie-page';
import Player from '../../pages/player/player';
import { AppRoutes, AuthStatus } from '../../constants/consts';
import PrivateRouteMyListPage from '../private-route-my-list-page/private-route-my-list-page';
import AddReview from '../../pages/add-review/add-review';
import MoviePageOverview from '../../pages/movie-page-overview/movie-page-overview';
import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { fetchMovies } from '../../store/slices/fimls.thunks';
import PrivateRouteLogin from '../private-route-login/private-route-login';

const isAuth = AuthStatus.NotAuth;

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main}>
          <Route index element={<Main />} />
          <Route path={AppRoutes.Login} element={<PrivateRouteLogin />} />
          <Route
            path={AppRoutes.MyList}
            element={<PrivateRouteMyListPage authStatus={isAuth} />}
          />
          <Route path={`${AppRoutes.Movie}`} element={<MoviePage />}>
            <Route
              path={AppRoutes.MovieOverview}
              element={<MoviePageOverview />}
            />
          </Route>
          <Route path={AppRoutes.Player} element={<Player />} />
          <Route path="/films/:id/addreview" element={<AddReview />} />
          <Route path={AppRoutes.NotFound} element={<NotFound404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
