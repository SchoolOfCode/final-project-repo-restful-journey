import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "../Homepage/Homepage.js";
import IngredientPage from "../IngredientPage/IngredientPage.js";
import RecipePage from "../RecipePage/RecipePage.js";
import SearchPage from "../SearchPage/SearchPage.js";
import ShoppingList from "../ShoppingList/ShoppingList.js";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/ingredients">Ingredients Page</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/search">Search</Link>
        <Link to="/shoppinglist">Shopping List</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="ingredients" element={<IngredientPage />} />
        <Route path="recipes" element={<RecipePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="shoppinglist" element={<ShoppingList />} />
      </Routes>
    </div>
  );
}

export default App;
