import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import NotFound404 from '../../pages/not-found-404/not-found-404';
import MoviePage from '../../pages/movie-page/movie-page';
import MoviePageReviews from '../../pages/movie-page-reviews/movie-page-reviews';
import Player from '../../pages/player/player';
import { AppRoutes, AuthStatus } from '../../constants/consts';
import PrivateRouteMyListPage from '../private-route-my-list-page/private-route-my-list-page';
import { mocksMovies } from '../../mocks/films';
import AddReview from '../../pages/add-review/add-review';
import MoviePageDetails from '../../pages/movie-page-details/movie-page-details';
import MoviePageOverview from '../../pages/movie-page-overview/movie-page-overview';
import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { fetchMovies } from '../../store/slices/fimls.thunks';

interface IAppProps {
  filmName: string;
  genre: string;
  promoDate: number;
}

const isAuth = AuthStatus.NotAuth;

function App(props: IAppProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main}>
          <Route
            index
            element={
              <Main
                filmName={props.filmName}
                genre={props.genre}
                promoDate={props.promoDate}
              />
            }
          />
          <Route path={AppRoutes.Login} element={<SignIn />} />
          <Route
            path={AppRoutes.MyList}
            element={<PrivateRouteMyListPage authStatus={isAuth} />}
          />
          <Route
            path={`${AppRoutes.Movie}`}
            element={<MoviePage movies={mocksMovies} />}
          >
            <Route
              path={AppRoutes.MovieOverview}
              element={<MoviePageOverview />}
            />
            <Route path="details" element={<MoviePageDetails />} />
            <Route path="review" element={<MoviePageReviews />} />
          </Route>
          <Route
            path={AppRoutes.Player}
            element={<Player movies={mocksMovies} />}
          />
          <Route
            path={AppRoutes.AddReview}
            element={<AddReview movies={mocksMovies} />}
          />
          <Route path={AppRoutes.NotFound} element={<NotFound404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
