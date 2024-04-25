export type PopularMoviesListResult = {
  docs: Doc[];
  total: number;
  limit: number;
  page: number;
  pages: number;
};

export type Doc = {
  id: number;
  name: string;
  alternativeName?: string;
  names: Name[];
  type: string;
  typeNumber: number;
  year: number;
  description: string;
  shortDescription: string;
  rating: Rating;
  votes: Votes;
  movieLength: number;
  ratingMpaa?: string;
  ageRating: number;
  poster: Poster;
  backdrop: Backdrop;
  genres: Genre[];
  countries: Country[];
  top250: number;
  isSeries: boolean;
  ticketsOnSale: boolean;
  logo?: Logo;
};

export type MovieDetailResult = {
  id: number;
  externalId: ExternalId;
  name: string;
  alternativeName: string;
  names: Name[];
  type: string;
  typeNumber: number;
  year: number;
  description: string;
  shortDescription: string;
  slogan: string;
  rating: Rating;
  votes: Votes;
  movieLength: number;
  ratingMpaa: string;
  ageRating: number;
  poster: Poster;
  backdrop: Backdrop;
  genres: Genre[];
  countries: Country[];
  persons: Person[];
  budget: Budget;
  sequelsAndPrequels: SequelsAndPrequel[];
  watchability: Watchability;
  isSeries: boolean;
  audience: Audience[];
  ticketsOnSale: boolean;
  lists: string[];
  createdAt: string;
  updatedAt: string;
};

export type ExternalId = {
  kpHD: string;
};

export type Name = {
  name: string;
  language?: string;
};

export type Rating = {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
};

export type Votes = {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
};

export type Poster = {
  url: string;
  previewUrl: string;
};

export type Backdrop = {
  url: string;
  previewUrl: string;
};

export type Genre = {
  name: string;
};

export type Country = {
  name: string;
};

export type Person = {
  id: number;
  photo: string;
  name: string;
  enName?: string;
  description?: string;
  profession: string;
  enProfession: string;
};

export type Budget = {
  currency: string;
  value: number;
};

export type SequelsAndPrequel = {
  id: number;
  name: string;
  alternativeName: string;
  type: string;
  poster: Poster2;
};

export type Poster2 = {
  url: string;
  previewUrl: string;
};

export type Watchability = {
  items: Item[];
};

export type Item = {
  name: string;
  logo: Logo;
  url: string;
};

export type Logo = {
  url: string;
};

export type Audience = {
  count: number;
  country: string;
};

export type PopularMoviesListQueryOptions = {
  page: number;
  lists: string;
  limit: number;
  offset: number;
};
