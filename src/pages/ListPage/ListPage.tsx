import { Api } from "@/store/api";
import MovieListItem from "./components/MovieListItem.tsx";
import { useState } from "react";

const ListPage = () => {
  const [page, setPage] = useState(1);

  const moviesList = Api.usePopularMovesQuery({
    page: page,
    limit: 12,
    offset: 0,
    lists: "top250"
  });

  const handleNextPageButtonClick = () => {
    setPage((page) => Math.min(page + 1, moviesList.data?.pages ?? 10 ** 5));
  };

  const handlePrevPageButtonClick = () => {
    setPage((page) => Math.max(page - 1, 1));
  };

  return (
    <>
      <header className="w-full h-20 bg-orange-600 text-left flex items-center justify-between">
        <div className="max-w-[1400px] min-w-[310px] mx-auto w-[85%]">
          <p className=" text-2xl font-medium text-white">Кино справочник</p>
        </div>
      </header>
      <main className="text-white bg-stone-700 flex flex-col items-center">
        <section className="flex max-w-[1400px] min-w-[310px] mx-auto w-[85%] flex-wrap gap-6 justify-center">
          <h2 className="w-full text-center my-6 text-4xl font-medium">
            Список популярных фильмов
          </h2>
          {moviesList.data?.docs.map((movie) => (
            <MovieListItem key={movie.id} movieData={movie} />
          ))}
          <div className="w-full sm:h-20 flex-col sm:flex-row flex items-center justify-center my-10 gap-2 sm:gap-8 text-lg">
            <button
              disabled={moviesList.isFetching || page === 1}
              onClick={handlePrevPageButtonClick}
              className="py-2 w-64 bg-gray-400 enabled:bg-white enabled:hover:bg-orange-600 enabled:hover:text-white transition text-black"
            >
              Предыдущая страница
            </button>
            <p className="text-xl">{page}</p>
            <button
              disabled={
                moviesList.isFetching || moviesList.data?.pages === page
              }
              onClick={handleNextPageButtonClick}
              className="py-2 w-64 bg-gray-400 enabled:bg-white enabled:hover:bg-orange-600 enabled:hover:text-white transition text-black"
            >
              Следующая страница
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default ListPage;
