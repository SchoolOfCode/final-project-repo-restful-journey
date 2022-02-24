import {useState, useEffect} from "react";
import SearchPage from "../SearchPage/SearchPage";
import RecipePage from "../RecipePage/RecipePage";
import { useNavigate, Route, Routes } from "react-router-dom";

const apiId = process.env.REACT_APP_EDAMAM_ID;
const apiKey = process.env.REACT_APP_EDAMAM_KEY;

function IngredientPage({ ingredient, filtered, setIngredient }) {
  const [recipes, setRecipes] = useState([]); //20 recipes
  const [discover, setDiscover] = useState(false);
  const [userRecipe, setUserRecipe] = useState([])

  let navigate = useNavigate();
  function routeChange() {
    let path = "search";
    navigate(path);
  }


function handleClick() {
  setDiscover(true);
  routeChange();
  console.log("handleClick is working!")
  } 
  
  function handleRecipe(index) {
    const recipe= recipes.filter ((_, i )=> (i === index))
   setUserRecipe(recipe);
   routeChangeRecipe();
    } 

    function routeChangeRecipe() {
      let path = "recipe";
    navigate(path);
    }

  useEffect(() => {
    async function fetchRecipe() {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=${apiId}&app_key=${apiKey}`
      );
      const { hits } = await response.json();
      setRecipes(hits);
    }
    fetchRecipe();
  }, [ingredient, apiId, apiKey]);
  

  if (!discover && userRecipe.length < 1) {
    return (
      <>
      <div>
      <h1>IngredientPage</h1>

        <h2>{ingredient}</h2>
        {filtered.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.imgurl} alt={item.name} />

              <h1>{item.name}</h1>
              <h2>{item.nutrition}</h2>
              <h2>{item.fact}</h2>
            </div>
          )
        })}
        </div>
        <div >
        {recipes.slice(0, 4).map((item, index) => {
          return (
            <div key={index} >
              <div >
                <img
                  src={item.recipe.images.REGULAR.url}
                  alt={item.label}
                  onClick={() => handleRecipe(index)}
                ></img>
                <p>{item.recipe.label}</p>
              </div>
            </div>
          );
        })}
        </div>
        <h3 onClick={handleClick}>Discover more {ingredient} recipes here!</h3>
      </>
    );
  } else if(
    discover
  ) {
    return(
      <Routes>
      <Route
        path="/search/*"
        element={
          <SearchPage recipes={recipes} setRecipes={setRecipes} ingredient={ingredient} setIngredient={setIngredient}
            userRecipe={userRecipe} setUserRecipe={setUserRecipe}
          />
  }
      />
    </Routes>
    )
    
  }
  else if(
    userRecipe.length > 0
  ) {
    return(
      <Routes>
      <Route
        path="/recipe/*"
        element={
         <RecipePage userRecipe = {userRecipe}/> 
  }
      />
    </Routes>
    )
    
  }

  
}

export default IngredientPage;
