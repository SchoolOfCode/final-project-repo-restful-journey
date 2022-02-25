import {useState} from 'react';
import { useNavigate, Route, Routes } from "react-router-dom";
import ShoppingList from '../ShoppingList/ShoppingList';

function RecipePage({ userRecipe }) {
const [list, setList] = useState([])
const [trolley, setTrolley] = useState(false)

let navigate = useNavigate();

function routeChange() {
  let path = "shoppingList";
  navigate(path);
}
function handleTrolley(){
  setTrolley(true)
  routeChange();
}

function handleClick(item){
  setList([...list, item])
}

  
  if (userRecipe.length && trolley === false) {
    return (
      <>
        <div>
          <img src={userRecipe[0].recipe.images.REGULAR.url} alt="userRecipe[0].recipe.label" />
        </div>
        <div>
          <p>{userRecipe[0].recipe.label}</p>
        </div>
        <div>
          <div>
            <p><a href={userRecipe[0].recipe.url}>link to external recipe</a></p>
          </div>
          <div>
            <p>{userRecipe[0].recipe.totalTime} minutes</p>
          </div>
          <div>
            <p>{Math.round(userRecipe[0].recipe.totalNutrients.ENERC_KCAL.quantity)} kcal</p>
          </div>
        </div>
        <div>
          <div>
            <p>Ingredients</p>
          </div>
          <div>
            <ul>
              {userRecipe[0].recipe.ingredientLines.map((item, i)=>{
              return(
                <div key={i} style={{display: 'flex', justifyContent: 'space-between'}}>
                  <li >{item}</li>
                  <button onClick={()=>handleClick(item)}>+</button>
                </div>
                )
              })}
            </ul>
          </div>
        </div>
        <p onClick={() => handleTrolley()}>Check your Shopping list</p>
      </>
    );
  } else if (trolley) {
    return(
      <Routes>
      <Route
        path="/shoppingList"
        element={<ShoppingList list={list} setList={setList}/>}
      />
    </Routes>
    )
    
  }  else {
    return (
      <div>
        {' '}
      </div>
    );
  }
}

export default RecipePage;
