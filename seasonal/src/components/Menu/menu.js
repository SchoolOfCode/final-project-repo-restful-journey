import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import {Link} from "react-router-dom";
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
    <Link to={'/'}>Login </Link>
    <Link to={'/home'}>Home</Link>
    <Link to={'/ingredients'}>Ingredients</Link>
    <Link to={'/recipes'}>Recipes</Link>
    <Link to={'/search'}>Search</Link>
    <Link to={'/shoppinglist'}>Shopping List</Link>
    <Link to={'/about'}>About</Link>
    <Link to={'/timeline'}>Timeline</Link>
    <Link to={'/favourites'}>Favourites</Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
