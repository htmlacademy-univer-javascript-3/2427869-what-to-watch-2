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
