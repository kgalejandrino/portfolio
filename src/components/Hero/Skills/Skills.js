import classes from "./Skills.module.css";
import html from "../../../assets/html.png";
import css from "../../../assets/css.png";
import javascript from "../../../assets/js.png";
import react from "../../../assets/react.png";
import python from "../../../assets/python.png";

const Skills = () => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>Skills</div>
      <ul className={classes["tech-stack"]}>
        <li className={classes["img-container"]}>
          <img src={html} alt="html logo" />
        </li>
        <li className={classes["img-container"]}>
          <img src={css} alt="css logo" />
        </li>
        <li className={classes["img-container"]}>
          {/* <p className={classes.label}>Javascript</p> */}
          <img src={javascript} alt="javascript logo" />
        </li>
        <li className={classes["img-container"]}>
          {/* <p className={classes.label}>React</p> */}
          <img src={react} alt="react logo" />
        </li>
        <li className={classes["img-container"]}>
          {/* <p className={classes.label}>Python</p> */}
          <img src={python} alt="python logo" />
        </li>
      </ul>
    </div>
  );
};

export default Skills;
