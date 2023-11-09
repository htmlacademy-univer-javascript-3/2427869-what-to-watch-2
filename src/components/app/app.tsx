import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import NotFound404 from '../../pages/not-found-404/not-found-404';
import MoviePage from '../../pages/movie-page/movie-page';
import MoviePageReviews from '../../pages/movie-page-reviews/movie-page-reviews';
import Player from '../../pages/player/player';
import { AppRoutes, AuthStatus } from '../../constants/consts';
import PrivateRouteMyListPage from '../private-route-my-list-page/private-route-my-list-page';
import { mocksMovies, IMocksMovies } from '../../mocks/films';
import AddReview from '../../pages/add-review/add-review';
import MoviePageDetails from '../../pages/movie-page-details/movie-page-details';

interface IAppProps {
  filmName: string;
  genre: string;
  promoDate: number;
  mocksMovies: IMocksMovies[];
}

const isAuth = AuthStatus.NotAuth;

//TODO: сделать линку для овервью на мовипэйдж
function App(props: IAppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main}>
          <Route
            index
            element={
              <Main
                mocksMovies={props.mocksMovies}
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
            path={AppRoutes.Movie}
            element={<MoviePage movies={mocksMovies} />}
          />
          <Route
            path={AppRoutes.MovieReviews}
            element={<MoviePageReviews movies={mocksMovies} />}
          />
          <Route
            path={AppRoutes.Player}
            element={<Player movies={mocksMovies} />}
          />
          <Route
            path={AppRoutes.AddReview}
            element={<AddReview movies={mocksMovies} />}
          />
          <Route
            path={AppRoutes.MovieDetails}
            element={<MoviePageDetails movies={mocksMovies} />}
          />
          {/* <Route path={AppRoutes.} */}
          <Route path={AppRoutes.NotFound} element={<NotFound404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
