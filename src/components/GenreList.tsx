import useGenre from "../hooks/useGerne";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};
export default GenreList;
