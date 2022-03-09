import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./IngredientPage.module.css";
const recipeApiKey = process.env.REACT_APP_SPONNACULAR_KEY;

function IngredientPage({ cssSeason }) {
  const localStorageIngredient =
    JSON.parse(localStorage.getItem("ingredient")) || {};
  console.log(localStorageIngredient.name);
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();
  const [ingredient] = useState(
    location.state ? location.state.ingredient : localStorageIngredient
  );
  let ingredientName = ingredient.name;
  console.log(ingredient);
  console.log(recipes.length);

  useEffect(() => {
    if (ingredient) {
      localStorage.setItem("ingredient", JSON.stringify(ingredient));
    }
  }, [ingredient]);

  useEffect(() => {
    async function getRecipe() {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${recipeApiKey}&query=${ingredient.name}&titleMatch=${ingredient.name}&number=10`
      );
      const data = await response.json();
      setRecipes(data.results);
    }
    getRecipe();
  }, [ingredient]);

  console.log("ingredient page", ingredient);

  return (
    <>
      <div>
        <h1 className={css[`ingredientTitle${cssSeason}`]}>
          - {ingredient.name} -
        </h1>

        <div data-testid="imageContainer" className={css.ingredientContainer}>
          <div>
            <img
              className={css.mainImage}
              src={ingredient.imgurl}
              alt={ingredient.name}
            />
          </div>
          <div className={css[`ingredientDetails${cssSeason}`]}>
            <h2>{ingredient.nutrition}</h2>
          </div>
          <div className={css[`fact${cssSeason}`]}>
            <hr className={css[`hr${cssSeason}`]} />
            <h2>Did you know💡: {ingredient.fact}</h2>
          </div>
        </div>
      </div>
      <div className={css.imageContainer}>
        {recipes &&
          recipes.slice(0, 4).map((item, index) => {
            return (
              <div className={css.recipeContainer} key={item.id}>
                <Link to="/recipes" state={{ recipeId: item.id }}>
                  <figure className={css.recipeContainer2}>
                    <img src={item.image} alt={item.id}></img>
                    <figcaption className={css.caption}>
                      {item.title}
                    </figcaption>
                  </figure>
                </Link>
              </div>
            );
          })}
      </div>
      {recipes.length > 4 ? (
        <Link to="/search" state={{ recipes, ingredientName }}>
          <h3 data-testid="discover" className={css[`discover${cssSeason}`]}>
            Discover more {ingredient.name} recipes here!
          </h3>
        </Link>
      ) : (
        <></>
      )}
    </>
  );
}

export default IngredientPage;
