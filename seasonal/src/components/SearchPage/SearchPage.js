import {useState}from 'react'
import RecipePage from "../RecipePage/RecipePage";
import { Container } from '@chakra-ui/react';
import SearchInput from '../SearchInput/SearchInput';
import { useNavigate, Route, Routes } from "react-router-dom";
import css from './SearchPage.module.css';

function SearchPage({ingredient,setIngredient, recipes, setRecipes, setUserRecipe, userRecipe}) {
const [display, setDisplay] = useState(false)
  
  let navigate = useNavigate();

  function routeChange() {
    let path = "recipe";
    navigate(path);
  }
  function handleClick(index) {
    const recipe = recipes.filter ((_, i )=> (i === index))
    setDisplay(true)
    setUserRecipe(recipe);
    routeChange();
  }
  
if (display === false)
{return (
    <Container maxW="container.md" className={css.mainContainer}>
      <SearchInput ingredient={ingredient} setIngredient={setIngredient} />
      <div className={css.container1}>
      {recipes.slice(4, 10).map((item, index) => {
        return (
          <div key={index} className={css.container2}>
            <div className={css.container3}>
              <img
                src={item.recipe.images.REGULAR.url}
                alt={item.label}
                onClick={() => handleClick(index)}
              ></img>
              <p>{item.recipe.label}</p>
            </div>
          </div>
        );
      })}
      </div>
    </Container>
  );} else if (display){
    return(
      <Routes>
      <Route
        path="/recipe/*"
        element={<RecipePage userRecipe = {userRecipe}/>}
      />
    </Routes>
    )
  }
  
}

export default SearchPage;
