import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../global";
import Burger from "../Burger/burger.js";
import Menu from "../Menu/menu.js";
import { Logo } from "../logo/logo";
import "./About.css"





export function About () {
   return (

<div>
<h1 className="about-us">About Us</h1>
<img className="image" src={require("../../Images/image.png")} alt="four seasons tree" />
<p className="text">Eating seasonally means eating food that's naturally ripe and ready for harvest in your local area at the time, 
instead of imported foods from different climates around the world. Eating organic, seasonal food, or food that you've 
grown at home can make a large difference in cutting down your food miles, helping to make your diet more sustainable and
reduce your carbon footprint. Eating local and seasonal food is not only more tasty and healthy (the nutrients and flavours
have fully developed so they're sweet, crunchy and the best they can be) but better for the environment. 
Additionally, it is often more affordable, as it hasn't had to be imported, and is more readily available during that month.
</p>
</div> 
    
)}

