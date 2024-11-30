import { useGlobalContext } from "../context";
import { CocktailList } from "./CocktailList";
import { SearchForm } from "./SearchForm";

export const Home = () => {
  const { loading } = useGlobalContext();

  return (
    <>
      <SearchForm></SearchForm>
      {loading ? <h1>loading...</h1> : <CocktailList></CocktailList>}
    </>
  );
};
