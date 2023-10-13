import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import NotFound404 from '../../pages/not-found-404/not-found-404';
import MoviePage from '../../pages/movie-page/movie-page';
import MoviePageReviews from '../../pages/movie-page-reviews/movie-page-reviews';
import Player from '../../pages/player/player';
import {AppRoutes, AuthStatus} from '../../constants/consts';
import PrivateRouteMyListPage from '../private-route-my-list-page/private-route-my-list-page';

interface IAppProps {
  filmName: string;
  genre: string;
  promoDate: number;
}

const mocksMovies = [{
  id: '1',
  filmName: 'The Grand Budapest Hotel',
  genre: 'drama',
  promoDate: 2014
},
{
  id: '2',
  filmName: 'The Grand Budapest Hotel 2',
  genre: 'drama',
  promoDate: 2014
},
{
  id: '3',
  filmName: 'The Grand Budapest Hotel 3',
  genre: 'drama',
  promoDate: 2014
}];

const mocksPlayer = [
  {
    id: '1',
    filmName: 'The Grand Budapest Hotel',
    duration: '2:10:15',
  },
  {
    id: '2',
    filmName: 'The Grand Budapest Hotel 2',
    duration: '1:10:37',
  },
];

const isAuth = AuthStatus.Auth;

function App(props: IAppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main}>
          <Route index element={
            <Main
              filmName={props.filmName}
              genre={props.genre}
              promoDate={props.promoDate}
            />
          }
          />
          <Route path={AppRoutes.Login} element={<SignIn />} />
          <Route path={AppRoutes.MyList} element={<PrivateRouteMyListPage authStatus = {isAuth} />} />

          <Route path={AppRoutes.Movie} element={<MoviePage movies={mocksMovies}/>} />
          <Route path={AppRoutes.MovieReviews} element={<MoviePageReviews movies={mocksMovies}/>} />
          <Route path={AppRoutes.Player} element={<Player movies={mocksPlayer}/>} />

          <Route path={AppRoutes.NotFound} element={<NotFound404 />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
