import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../Profile/Profile";
import LogoutButton from "../LogoutButton/Logout";
import css from "./LoginButton.module.css";
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className={css.loginPage}>
      <Profile />
      <div className={css.logButtons}>
        <button className={css.login} onClick={() => loginWithRedirect()}>
          Log In
        </button>
        <LogoutButton className={css.logout} />
      </div>
    </div>
  );
};

export default LoginButton;
