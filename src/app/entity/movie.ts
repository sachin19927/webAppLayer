import { Cast } from "./cast";
import { SimilarMovies } from "./similarMovies";

export interface Movie{
  name: string;
  year: string;
  imdb_rating:string;
  movie_poster:string;
  genres:string;
  directors:Date;
  cast:Cast[];
  similar_movies:SimilarMovies[];
}
