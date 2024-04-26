import { Api } from "@/store/api";
import { Link, useParams } from "react-router-dom";

const DetailPage = () => {
  const filmId = Number(useParams().id);

  const detailedMovie = Api.useDetailMovieQuery(filmId, { skip: filmId === 0 });

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <header className="w-full h-20 bg-orange-600 text-left flex items-center justify-between">
        <div className="max-w-[1400px] min-w-[310px] mx-auto w-[85%] flex justify-between">
          <p className=" text-lg lg:text-2xl font-medium text-white">
            Кино справочник
          </p>
          <Link
            className="text-lg lg:text-xl font-medium text-white hover:underline"
            to={"/"}
          >
            Список фильмов
          </Link>
        </div>
      </header>
      <main className="text-white bg-stone-700 flex flex-col items-center grow">
        <section className="flex max-w-[1400px] min-w-[310px] mx-auto w-[85%] flex-wrap gap-6 justify-center">
          <h2 className="w-full my-6 text-4xl font-medium text-center">
            {detailedMovie.data?.rating.kp.toFixed(1)}{" "}
            {detailedMovie.data?.name}
          </h2>
          <div className="w-full flex flex-col-reverse gap-8 lg:flex-row lg:justify-center items-center">
            <div className="flex flex-col gap-8">
              <p className="max-w-72 lg:max-w-[450px] text-lg">
                <span className="font-medium">Описание: </span>
                {detailedMovie.data?.description}
              </p>
              <div>
                <p>
                  <span className="font-medium ">Длительность: </span>{" "}
                  {detailedMovie.data?.movieLength} минут
                </p>
                <p>
                  <span className="font-medium ">Популярность: </span>{" "}
                  {(
                    Number(detailedMovie.data?.rating.kp) *
                    10 *
                    Math.random()
                  ).toFixed(2)}
                </p>
                <p>
                  <span className="font-medium ">Дата выхода: </span>{" "}
                  {detailedMovie.data?.createdAt.slice(0, 10)}
                </p>
                <p>
                  <span className="font-medium ">Жанр: </span>{" "}
                  {detailedMovie.data?.genres.map((g) => g.name).join(", ")}
                </p>
              </div>
            </div>
            <img
              className="w-[300px] lg:w-96"
              src={detailedMovie.data?.poster.url}
              alt="Постер фильма."
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default DetailPage;
