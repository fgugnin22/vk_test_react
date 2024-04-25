import { Api } from "@/store/api";
import MovieListItem from "./components/MovieListItem.tsx";

const ListPage = () => {
  const moviesList = Api.usePopularMovesQuery({
    page: 1,
    limit: 12,
    offset: 0,
    lists: "top250"
  });

  return (
    <>
      <header className="w-full h-20 bg-orange-600 text-left flex items-center justify-between">
        <div className="max-w-[1400px] min-w-[310px] mx-auto w-[85%]">
          <p className=" text-2xl font-medium text-white">Кино справочник</p>
        </div>
      </header>
      <main className="text-white bg-stone-700 flex flex-col items-center">
        <div className="flex max-w-[1400px] min-w-[310px] mx-auto w-[85%] flex-wrap gap-6 justify-center">
          {moviesList.data?.docs.map((movie) => (
            <MovieListItem key={movie.id} movieData={movie} />
          ))}
        </div>
      </main>
    </>
  );
};

export default ListPage;
