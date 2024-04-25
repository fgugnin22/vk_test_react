import { Doc } from "@/types";
import { Link } from "react-router-dom";

type MovieListItemProps = {
  movieData: Doc;
};

const MovieListItem: React.FC<MovieListItemProps> = ({ movieData }) => {
  return (
    <Link
      to={`/movie/${movieData.id}`}
      className="w-[300px] flex flex-col gap-3"
    >
      <img
        className="max-w-full w-full h-[400px] object-cover"
        src={movieData.poster.url}
        alt={movieData.name}
      />
      <div className="flex gap-4 items-center">
        <p className="text-5xl font-semibold">
          {movieData.rating.kp.toFixed(1)}
        </p>
        <div className="flex flex-col justify-between h-full mt-1 font-medium leading-4">
          <p>{movieData.name}</p>
          <p>{movieData.year}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieListItem;
