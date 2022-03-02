import { useState, useEffect } from "react";
import { Container } from "@chakra-ui/react";
import SearchInput from "../SearchInput/SearchInput";
import { Link, useLocation } from "react-router-dom";
import css from "./SearchPage.module.css";
const recipeApiKey = process.env.REACT_APP_SPONNACULAR_KEY;

function SearchPage() {
  const location = useLocation();
  const [ingredient, setIngredient] = useState(
    location.state ? location.state.ingredientName : null
  );
  const [recipes, setRecipes] = useState(
    location.state ? location.state.recipes : null
  );

  console.log(ingredient);

  useEffect(() => {
    async function getRecipe() {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${recipeApiKey}&query=${ingredient}&titleMatch=${ingredient}&number=10`
      );
      const data = await response.json();
      setRecipes(data.results);
    }
    getRecipe();
  }, [ingredient]);

  return (
    <Container maxW="container.md" className={css.mainContainer}>
      <SearchInput
        placeholder="Search recipes..."
        ingredient={ingredient}
        setIngredient={setIngredient}
      />
      <div className={css.container1}>
        {recipes &&
          recipes.slice(4, 10).map((item, index) => {
            return (
              <div key={item.id} className={css.container2}>
                <div className={css.container3}>
                  <Link to="/recipes" state={{ recipeId: item.id }}>
                    <img
                      className={css.img}
                      src={item.image}
                      alt={item.title}
                    ></img>
                  </Link>
                  <p className={css.caption}>{item.title}</p>
                </div>
              </div>
            );
          })}
      </div>
    </Container>
  );
}

export default SearchPage;
