import css from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Homepage/Homepage.js";
import IngredientPage from "../IngredientPage/IngredientPage.js";
import RecipePage from "../RecipePage/RecipePage.js";
import SearchPage from "../SearchPage/SearchPage.js";
import ShoppingList from "../ShoppingList/ShoppingList.js";
import NavMenu from "../NavMenu/navmenu";
import LoginButton from "../LoginButton/Login";
import { About } from "../About/about.js";
import { Box } from "@chakra-ui/react";
import { Logo } from "../Logo/Logo.js";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { getSeason } from "../../libs/seasonalData";

const season = getSeason();

async function postNewUser(newUser) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  };
  const response = await fetch(
    "https://nourish-seasonal.herokuapp.com/users",
    requestOptions
  );
  const data = await response.json();
  console.log(data);
}

function App() {
  // const [id, setid] = useState(null);
  const [cssSeason, setCssSeason] = useState(season);
  const { user, isAuthenticated } = useAuth0();
  let userId = "";
  if (user) {
    userId = user.sub.split("|")[1];

    // setid(userId)
  }

  function handleSeason(e) {
    setCssSeason(e);
    console.log(cssSeason);
  }

  useEffect(() => {
    if (isAuthenticated) {
      const newUser = {
        username: user.nickname,
        email: userId,
        favourites: [],
        list: [],
      };
      postNewUser(newUser);
    }
  }, [isAuthenticated]);

  console.log("user  object app", user);
  console.log(`"app", ${userId}, ${typeof userId}`);

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      className={css.App}
      data-testid="mainbox"
    >
      <NavMenu cssSeason={cssSeason} />
      <Routes>
        <Route path="/" element={<LoginButton />} />
        <Route
          path="home/*"
          element={
            <Homepage
              user={user}
              cssSeason={cssSeason}
              handleSeason={(e) => {
                handleSeason(e.target.value);
              }}
            />
          }
        />
        <Route
          path="ingredients"
          element={<IngredientPage cssSeason={cssSeason} />}
        />
        <Route
          path="recipes"
          element={<RecipePage user={user} cssSeason={cssSeason} />}
        />
        <Route path="search" element={<SearchPage />} />
        <Route
          path="shoppinglist"
          element={<ShoppingList user={user} cssSeason={cssSeason} />}
        />
        <Route path="about" element={<About cssSeason={cssSeason} />} />
      </Routes>
    </Box>
  );
}

export default App;
