import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../context";

export const SingleCocktail = () => {
  const { searchResult } = useGlobalContext();
  const navigate = useNavigate();
  const { id } = useParams();
  let cocktail: any = null;
  if (searchResult) {
    cocktail = searchResult.find((item: any) => item.idDrink === id);
    localStorage.setItem("cocktail", cocktail);
  } else {
    cocktail = localStorage.getItem("cocktail");
  }
  const {
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  } = cocktail;

  const Ingredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  ].filter((item) => item != null);
  return (
    <div className="detail-container">
      <header>
        <button className="btn" onClick={() => navigate(-1)}>
          back home
        </button>
        <h3>{cocktail.strDrink}</h3>
      </header>
      <div className="drink">
        <img
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
          className="img"
        />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {cocktail.strDrink}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {cocktail.strCategory}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {cocktail.strAlcoholic}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {cocktail.strGlass}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {Ingredients.map((item, index) => {
              if (index < Ingredients.length - 1)
                return (
                  <span className="ing" key={index}>
                    {item},
                  </span>
                );
              else
                return (
                  <span className="ing" key={index}>
                    {item}
                  </span>
                );
            })}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {cocktail.strInstructions}
          </p>
        </div>
      </div>
    </div>
  );
};
