import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';

const defaultProps = {
  filmName: 'The Grand Budapest Hotel',
  genre: 'drama',
  promoDate: 2014,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App
        filmName={defaultProps.filmName}
        genre={defaultProps.genre}
        promoDate={defaultProps.promoDate}
      />
    </React.StrictMode>
  </Provider>
);
