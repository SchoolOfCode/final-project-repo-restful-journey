import React from "react";
import { Container } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { useFetch } from "../hooks/useFetch.js";
import { seasonQuotes, getSeason } from "../../libs/seasonalData.js";
import { useNavigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import IngredientPage from "../IngredientPage/IngredientPage.js";
import "./Homepage.css";

const season = getSeason();
const randomNumber = Math.floor(Math.random() * seasonQuotes[season].length);
console.log(randomNumber);

//test api used for testing useFetch custom hook. Will be replaced with ingredients back end.
const api = process.env.REACT_APP_API_CALL;

function Homepage() {
  const [type, setType] = useState("test");
  let navigate = useNavigate();
  function routeChange() {
    let path = "ingredients";
    navigate(path);
  }
  const [data] = useFetch(`${api}/ingredients`);
  console.log(data);
  console.log(getSeason());

  function handleClick(e) {
    setType(e.target.alt);
    console.log(type);
    routeChange();
  }

  if (data) {
    return (
      <>
        <Container maxW="container.xl">
          <div className="greeting">
            <h1>Hello username! 👋🏼</h1>
            <br />
            <h2>{seasonQuotes[season][randomNumber]}</h2>
          </div>
        </Container>
        <Routes>
          <Route
            path="/ingredients"
            element={<IngredientPage ingredient={type} />}
          />
        </Routes>
        <div className="img-container">
          {data.payload.map((item, index) => {
            return (
              <div key={index} className="ingredients">
                <Container maxW="container.xl">
                  <img
                    className="img"
                    src={item.imgurl}
                    alt={item.name}
                    onClick={(e) => handleClick(e)}
                  ></img>
                  <h1>{item.name}</h1>
                </Container>
              </div>
            );
          })}
        </div>
      </>
    );
  } else {
    return <h1>Hello again!</h1>;
  }
}

export default Homepage;
