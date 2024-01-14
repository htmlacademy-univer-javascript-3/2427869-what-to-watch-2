export enum AppRoutes {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Movie = '/films/:id/*',
  MovieDetails = 'details',
  MovieReviews = 'review',
  Player = '/player/:id',
  AddReview = '/films/:id/review',
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
  Drama = 'Drama',
  Thriller = 'Thriller',
  Fantasy = 'Fantasy',
  Action = 'Action',
  Adventure = 'Adventure',
}

export const BASE_URL = 'https://13.design.pages.academy/wtw';
