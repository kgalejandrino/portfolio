import { useState } from "react";

import Navigations from "./Navigations/Navigations";
import classes from "./Header.module.css";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header>
      <div className={`${classes["header-row"]} flex`}>
        <div className={classes.logo}>Kevin Alejandrino</div>
        <Navigations />
        <span className={classes["menu-icon"]} onClick={toggleMenuHandler}>
          {toggleMenu ? (
            <i className="fa-solid fa-bars"></i>
          ) : (
            <i className="fa-solid fa-xmark"></i>
          )}
        </span>
      </div>
    </header>
  );
};

export default Header;
