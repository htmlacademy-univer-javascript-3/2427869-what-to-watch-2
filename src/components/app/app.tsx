import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import NotFound404 from '../../pages/not-found-404/not-found-404';
import MoviePage from '../../pages/movie-page/movie-page';
import MoviePageReviews from '../../pages/movie-page-reviews/movie-page-reviews';
import Player from '../../pages/player/player';

interface IAppProps {
  filmName: string;
  genre: string;
  promoDate: number;
}

const mocks = [{
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

const isAuth = false;

function App(props: IAppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={
            <Main
              filmName={props.filmName}
              genre={props.genre}
              promoDate={props.promoDate}
            />
          }
          />
          <Route path="/login" element={<SignIn />} />
          <Route path="/mylist" element={<MyList isAuth = {isAuth}/>} />

          <Route path="/films/:id" element={<MoviePage movies={mocks}/>} />
          <Route path="/films/:id/review" element={<MoviePageReviews movies={mocks}/>} />
          <Route path="/player/:id" element={<Player />} />

          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
