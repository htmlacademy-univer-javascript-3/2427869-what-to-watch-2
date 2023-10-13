export enum AppRoutes {
    Main = '/',
    Login = '/login',
    MyList = '/mylist',
    Movie = '/films/:id',
    MovieReviews = 'films/:id/review',
    Player = '/player/:id',
    NotFound = '*'
}

export enum AuthStatus {
    Auth = 'AUTH',
    NotAuth = 'NOT_AUTH'
}
