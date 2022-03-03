import css from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Homepage/Homepage.js";
import IngredientPage from "../IngredientPage/IngredientPage.js";
import RecipePage from "../RecipePage/RecipePage.js";
import SearchPage from "../SearchPage/SearchPage.js";
import ShoppingList from "../ShoppingList/ShoppingList.js";
import NavMenu from "../NavMenu/navmenu";
import LoginButton from "../LoginButton/Login";
import { Box } from "@chakra-ui/react";
import { Logo } from "../logo/logo.js";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const {user} = useAuth0();

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      className={css.App}
    >
      <NavMenu />
      <Routes>
        <Route path="/" element={<LoginButton />} />
        <Route path="home/*" element={<Homepage user={user}/>} />
        <Route path="ingredients" element={<IngredientPage />} />
        <Route path="recipes" element={<RecipePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="shoppinglist" element={<ShoppingList />} />
        <Route path="hamburger" element={<NavMenu />} />
      </Routes>
    </Box>
  );
}

export default App;
