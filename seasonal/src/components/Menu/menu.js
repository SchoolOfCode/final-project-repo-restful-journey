import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import {Link} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Menu = ({ open }) => {
  const {isAuthenticated } = useAuth0();

  return (
    <StyledMenu open={open}>
    <Link to={'/'}>{!isAuthenticated ?'Login': 'Logout' }</Link>
    <Link to={'/home'}>Home</Link>
    <Link to={'/ingredients'}>Ingredients</Link>
    <Link to={'/recipes'}>Recipes</Link>
    <Link to={'/search'}>Search</Link>
    {isAuthenticated && <Link to={'/shoppinglist'}>Shopping List</Link>}
    <Link to={'/about'}>About</Link>
    {isAuthenticated && <Link to={'/favourites'}>Favourites</Link>}
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
