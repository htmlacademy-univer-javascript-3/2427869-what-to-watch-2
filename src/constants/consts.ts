export enum AppRoutes {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Movie = '/films/:id/*',
  MovieOverview = 'overview',
  MovieDetails = 'details',
  MovieReviews = 'review',
  Player = '/player/:id',
  AddReview = '/films/:id/addreview',
  NotFound = '*',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NotAuth = 'NOT_AUTH',
}

export enum Genres {
  All = 'All genres',
  Comedies = 'Comedy',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Dramas = 'Dramas',
  Horror = 'Horror',
  KidsAndFamily = 'Kids & Family',
  Romance = 'Romance',
  SciFi = 'Sci-Fi',
  Thrillers = 'Thrillers',
}

export const baseURL = 'https://13.design.pages.academy/wtw';
