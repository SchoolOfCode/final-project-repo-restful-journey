import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, ButtonGroup } from '@chakra-ui/react'


const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button 
     size='md'
    height='48px'
    width='200px'
    border='2px'
    borderColor='#black' 
    backgroundColor= '#ec9488' 
    _hover={{ bg: '#red' }}

   onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </Button>
  );
};

export default LogoutButton;
