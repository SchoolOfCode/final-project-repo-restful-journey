import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../Profile/Profile";
import LogoutButton from "../LogoutButton/Logout";
import css from "./LoginButton.module.css";
import { Button, ButtonGroup, Stack } from '@chakra-ui/react'



const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className={css.loginPage}>
      <Profile />
      <div className={css.logButtons}>
      <Stack variant='outline' direction= 'column' spacing='10'>
      {/* <img src= '../../loginbanner.png'alt='loginbanner'/> */}
        <Button 
         size='md'
        height='48px'
        width='200px'
        border='2px'
        borderColor='#black' 
        backgroundColor= '#acf39d'  
        className={css.login} onClick={() => loginWithRedirect()}>
          Log In
        </Button>
        <LogoutButton className={css.logout} />
        </Stack>
      </div>
    </div>
  );
};

export default LoginButton;
