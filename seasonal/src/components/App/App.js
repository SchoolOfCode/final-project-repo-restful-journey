import css from "./App.module.css";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "../Homepage/Homepage.js";
import IngredientPage from "../IngredientPage/IngredientPage.js";
import RecipePage from "../RecipePage/RecipePage.js";
import SearchPage from "../SearchPage/SearchPage.js";
import ShoppingList from "../ShoppingList/ShoppingList.js";
import NavMenu from "../NavMenu/navmenu";
import LoginButton from "../LoginButton/Login";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      className={css.App}
    >
      {/* <nav>
        <Link to="/">Login</Link>
        <Link to="/home">Homepage</Link>
        <Link to="/home/ingredients">Ingredients Page</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/search">Search</Link>
        <Link to="/shoppinglist">Shopping List</Link>
        <Link to="/hamburger">hamburgermenu</Link>
      </nav> */}
      <NavMenu />
      <Routes>
        <Route path="/" element={<LoginButton />} />
        <Route path="home/*" element={<Homepage />} />
        <Route path="/" element={<Homepage className={css.homepage} />} />
        <Route path="recipes" element={<RecipePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="shoppinglist" element={<ShoppingList />} />
        <Route path="hamburger" element={<NavMenu />} />
      </Routes>
    </Box>
  );
}

export default App;
