import React, { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../global";
import { menuTheme } from "../../theme";
import Burger from "../Burger/burger.js";
import Menu from "../Menu/menu.js";
import { Logo } from "../logo/logo";
import { useOnClickOutside } from "../../hook";
// import { css } from "@emotion/react";
import css from "./navmenu.module.css";

function NavMenu() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={menuTheme}>
      <>
        <GlobalStyles />
        <div ref={node} className={css.navdiv}>
          <Logo />
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </>
    </ThemeProvider>
  );
}
export default NavMenu;
