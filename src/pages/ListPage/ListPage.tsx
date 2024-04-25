import { Api } from "@/store/api";

const ListPage = () => {
  const moviesList = Api.usePopularMovesQuery({
    page: 1,
    limit: 10,
    offset: 0,
    lists: "top250"
  });

  return (
    <div>
      <pre>{JSON.stringify(moviesList.data, null, 2)}</pre>
    </div>
  );
};

export default ListPage;
