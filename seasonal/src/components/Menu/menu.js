import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { Link } from "react-router-dom";
import LogoutButton from "../LogoutButton/Logout";
import { useAuth0 } from "@auth0/auth0-react";

const Menu = ({ open }) => {
const { logout } = useAuth0();
  
  return (
    <StyledMenu open={open}>
      <a href="/">Login</a>
      <a href="/home">Home</a>
      <a href="/ingredients">Ingredients</a>
      <a href="/recipes">Recipes</a>
      <a href="/search">Search</a>
      <a href="/shoppinglist">Shopping List</a>
      <a href="/about">About Page</a>
      <a href="/favourites">Favourites</a>
      );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
