import React, { useState, useRef, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../global";
import { menuTheme } from "../../theme";
import Burger from "../Burger/burger.js";
import Menu from "../Menu/menu.js";
import { Logo } from "../logo/logo";
import { useOnClickOutside } from "../../hook";
// import { css } from "@emotion/react";
import css from "./navmenu.module.css";
import { Link } from "react-router-dom";

function NavMenu({ cssSeason }) {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={menuTheme(cssSeason)}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <div className={css.navdiv}>
            <Logo />
          </div>
          <Burger open={open} setOpen={setOpen} />
        </div>
        <Menu open={open} setOpen={setOpen} />
      </>
    </ThemeProvider>
  );
}
export default NavMenu;
