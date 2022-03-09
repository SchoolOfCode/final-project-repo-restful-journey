import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../Profile/Profile";
import LogoutButton from "../LogoutButton/Logout";
import css from "./LoginButton.module.css";
import { Button } from "@chakra-ui/react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div className={css.loginPage}>
      <Profile />
      <img
        className={css.img}
        src={require("../../Images/login-image.png")}
        alt="fruits & veg"
      />
      <h1 className={css.welcome}>Welcome to</h1>
      <h1 className={css.nourish}>nourish.</h1>
      <div className={css.logButtons}>
        <Button
          size="md"
          height="48px"
          width="250px"
          border="2px"
          borderColor="#black"
          backgroundColor="#acf39d"
          className={css.login}
          onClick={() => loginWithRedirect()}
        >
          Log In
        </Button>
        <LogoutButton className={css.logout} />
      </div>
    </div>
  );
};

export default LoginButton;
