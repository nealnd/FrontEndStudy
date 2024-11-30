import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

export const CocktailList = () => {
  const { searchResult } = useGlobalContext();
  if (searchResult)
    return (
      <div className="cocktail-container">
        {searchResult.map((item: any) => {
          return (
            <article className="cocktail-item" key={item.idDrink}>
              <div className="img-container">
                <img
                  src={item.strDrinkThumb}
                  alt={item.strDrink}
                  className="img"
                />
              </div>
              <div className="footer">
                <h4>{item.strDrink}</h4>
                <h5>{item.strGlass}</h5>
                <p>{item.strAlcoholic}</p>
                <Link className="btn" to={`/cocktail/${item.idDrink}`}>
                  details
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    );
  else
    return (
      <h4 style={{ textAlign: "center" }}>No matching cocktails found...</h4>
    );
};
