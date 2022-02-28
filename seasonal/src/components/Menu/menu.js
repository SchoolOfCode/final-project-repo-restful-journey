import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { Link } from "react-router-dom";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">Login</a>
      <a href="/home">Home</a>
      <a href="/ingredients">Ingredients</a>
      <a href="/recipes">Recipes</a>
      <a href="/search">Search</a>
      <a href="/shoppinglist">Shopping List</a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
