export enum AppRoutes {
    Main = '/',
    Login = '/login',
    MyList = '/mylist',
    Movie = '/films/:id',
    MovieDetails = '/films/:id/details',
    MovieReviews = 'films/:id/review',
    Player = '/player/:id',
    AddReview = '/films/:id/addreview',
    NotFound = '*'
}

export enum AuthStatus {
    Auth = 'AUTH',
    NotAuth = 'NOT_AUTH'
}
