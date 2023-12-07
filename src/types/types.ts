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
