import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import {Link} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Menu = ({ open }) => {
  const {isAuthenticated, logout } = useAuth0();

  return (
    <StyledMenu open={open}>
    {!isAuthenticated && <Link to={'/'}>Login</Link>}
    <Link to={'/home'}>Home</Link>
    <Link to={'/about'}>About</Link>
    {/* <Link to={'/ingredients'}>Ingredients</Link>
    <Link to={'/recipes'}>Recipes</Link> */}
    <Link to={'/search'}>Search</Link>
    <Link to={"/timeline"}>Seasonal Calendar</Link>
    {isAuthenticated && <Link to={'/shoppinglist'}>Shopping List</Link>}
    {isAuthenticated && <Link to={'/favourites'}>Favourites</Link>}
    {isAuthenticated && <a href='/' onClick={() => logout({ returnTo: window.location.origin })}>Logout</a>}
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
