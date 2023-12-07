export interface IMovies {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: string;
}

export interface IMovie {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  description: string;
  director: string;
  rating: number;
  scoresCount: number;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
}

export interface IPromoMovie {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  videoLink: string;
  genre: string;
  released: number;
  isFavorite: boolean;
}

export interface IProfile {
  name: string;
  avatarUrl: string;
  email: string;
  token: string;
}

export interface IDetail {
  property: string;
  value: string;
  messages: string[];
}

export interface ILoginErrorResponse {
  errorType: string;
  message: string;
  details: IDetail[];
}
