import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from '../Profile/Profile';
import LogoutButton from '../LogoutButton/Logout';
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <Profile />
      <LogoutButton />
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </>
  );
};

export default LoginButton;
