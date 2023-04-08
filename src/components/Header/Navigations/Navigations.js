import { useState } from "react";

import classes from "./Navigations.module.css";

const Navigations = () => {
  const [colorMode, setColorMode] = useState(true);

  const toggleColorMode = () => {
    setColorMode(!colorMode);
  };

  return (
    <nav className={classes.navigations}>
      <ul className={`${classes.nav} ${classes.main} ${classes.mobile}`}>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
        <li className={classes.resume}>Resume</li>
        <span className={classes.mode} onClick={toggleColorMode}>
          {colorMode ? (
            <i className="fa-regular fa-sun"></i>
          ) : (
            <i className="fa-regular fa-moon"></i>
          )}
        </span>
      </ul>
    </nav>
  );
};

export default Navigations;
