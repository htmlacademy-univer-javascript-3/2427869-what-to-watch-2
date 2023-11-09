import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { mocksMovies } from './mocks/films';

const defaultProps = {
  filmName: 'The Grand Budapest Hotel',
  genre: 'drama',
  promoDate: 2014
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      mocksMovies={mocksMovies}
      filmName={defaultProps.filmName}
      genre={defaultProps.genre}
      promoDate={defaultProps.promoDate}
    />
  </React.StrictMode>
);
