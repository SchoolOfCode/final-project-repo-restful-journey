import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../global';
import { theme } from '../../theme';
import Burger  from "../Burger/burger.js"
import Menu from '../Menu/menu.js';


function NavMenu() {

    const [open, setOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        
        <div>
          <h1>Hello. This is burger menu tutorial</h1>
          <img src="https://image.flaticon.com/icons/svg/2016/2016012.svg" alt="burger icon" />
          <small>Icon made by Freepik from www.flaticon.com</small>
        </div>
        <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen}/>
        </div>
      </>
    </ThemeProvider>
  );
}
export default NavMenu;
