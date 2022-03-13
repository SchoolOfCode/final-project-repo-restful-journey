import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./RecipePage.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const api = process.env.REACT_APP_API_CALL;
const recipeApiKey = process.env.REACT_APP_SPONNACULAR_KEY;

function RecipePage({ user, cssSeason }) {
  const { isAuthenticated } = useAuth0();
  const location = useLocation();
  const [list, setList] = useState([]);
  const [ingredient, setIngredient] = useState(null);
  const [recipe, setRecipe] = useState(null);
  const [favourites, setFavourites] = useState(null);
  const [userRecipeId, setUserRecipeId] = useState(
    location.state ? location.state.recipeId : null
  );

  let userId;
  if (user) {
    userId = user.sub.split("|")[1];
    console.log("User id", userId);
  }

  useEffect(() => {
    async function addIngredient() {
      try {
        await fetch(`${api}/users/add`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: userId, item: ingredient.item }),
        });
      } catch (e) {
        console.log(e);
      }
    }
    addIngredient();
  }, [userId, ingredient]);

  function handleClick(ingredient, e) {
    setIngredient({ item: ingredient });
    setList([...list, ingredient]);
    e.target.innerHTML = "✔️";
  }

  function handleRecipe(e, x) {
    e.target.innerHTML = `${x.step} 👍`;
  }

  function handleFavourites() {
    setFavourites(recipe);
  }

  //fetch recipe detailed info
  useEffect(() => {
    async function getRecipeById() {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${userRecipeId}/information?apiKey=${recipeApiKey}`
      );
      const data = await response.json();
      setRecipe(data);
    }
    getRecipeById();
  }, [userRecipeId]);

  //fetch favourite recipes
  useEffect(() => {
    async function addFavourite() {
      try {
        if (favourites) {
          const res = await fetch(`${api}/users/favourites`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: userId,
              recipe: JSON.stringify(recipe),
            }),
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
    addFavourite();
  }, [userId, recipe, favourites]);

  if (recipe) {
    return (
      <>
        <div>
          <img className={css.img} src={recipe.image} alt={recipe.title} />
          <div className={css.favouriteHeart}>
            <i
              onClick={handleFavourites}
              className={favourites ? css.liked : css.heart}
            ></i>
          </div>
        </div>
        <div>
          <h1 className={css.title}>- {recipe.title} -</h1>
        </div>
        <div className={css.recipeInfo}>
          <div>
            <p className={css[`duration${cssSeason}`]}>
              {recipe.readyInMinutes} minutes
            </p>
          </div>
          <div>
            <p className={css[`servings${cssSeason}`]}>
              {recipe.servings} servings
            </p>
          </div>
        </div>
        <div>
          <div>
            <p className={css.ingredients}>- Ingredients -</p>
          </div>
          <div>
            <ul>
              {recipe.extendedIngredients.map((ingredient, i) => {
                return (
                  <div
                    className={css[`listContainer${cssSeason}`]}
                    key={ingredient.name}
                  >
                    <li>{ingredient.original}</li>
                    <button
                      className={css[`addBtn${cssSeason}`]}
                      onClick={(e) => handleClick(ingredient.original, e)}
                    >
                      {"➕"}
                    </button>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        {isAuthenticated ? (
          <div className={css[`shoppingListLink${cssSeason}`]}>
            <Link to="/shoppinglist">
              <p className={css.link}>Go to your Shopping list</p>
              <i class="fa-solid fa-cart-shopping"></i>
            </Link>
          </div>
        ) : (
          <div className={css[`shoppingListLink${cssSeason}`]}>
            <Link to="/">
              <p className={css.link}>Login to create your Shopping List</p>
              <i class="fa-solid fa-cart-shopping"></i>
            </Link>
          </div>
        )}

        <div>
          <p className={css.instructions}>- Instructions -</p>
          <ul>
            {recipe.analyzedInstructions[0].steps.map((x, i) => {
              return (
                <div key={i}>
                  <li
                    onClick={(e) => handleRecipe(e, x)}
                    className={css.recipeSteps}
                  >
                    {x.step}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </>
    );
  } else {
    return (
      // Loading Spinner
      <div className={css[`ldsEllipsis${cssSeason}`]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default RecipePage;

// removed for demo, placeholder elements
{
  /* <div>
<p className={css[`noRecipe${cssSeason}`]}>No recipe selected.</p>
<p className={css[`linkToHome${cssSeason}`]}>
  Check the <Link to="/home"> &nbsp;home</Link> page for some
  inspiration!
</p>
</div> */
}
