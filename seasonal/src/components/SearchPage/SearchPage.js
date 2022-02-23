import { useState, useEffect } from 'react';
import { Container } from '@chakra-ui/react';
import SearchInput from '../SearchInput/SearchInput';
import css from './SearchPage.module.css';

const apiId = process.env.REACT_APP_EDAMAM_ID;
const apiKey = process.env.REACT_APP_EDAMAM_KEY;

function SearchPage() {
  const [ingredient, setIngredient] = useState('leeks');
  const [recipes, setRecipes] = useState([]);
  // console.log('stored in our recipe state', recipes);
  // console.log('ingredient = ', ingredient);

  function handleClick(e) {}

  useEffect(() => {
    async function fetchRecipe() {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=${apiId}&app_key=${apiKey}`
      );
      const { hits } = await response.json();
      setRecipes(hits.slice(0, 6));
    }
    fetchRecipe();
  }, [ingredient, apiId, apiKey]);

  return (
    <Container maxW="container.md" className={css.mainContainer}>
      <SearchInput ingredient={ingredient} setIngredient={setIngredient} />
      <div className={css.container1}>
      {recipes.map((item, index) => {
        return (
          <div key={index} className={css.container2}>
            <div className={css.container3}>
              <img
                src={item.recipe.images.REGULAR.url}
                alt={item.label}
                onClick={(e) => handleClick(e)}
              ></img>
              <p>{item.recipe.label}</p>
            </div>
          </div>
        );
      })}
      </div>
    </Container>
  );
}

export default SearchPage;
