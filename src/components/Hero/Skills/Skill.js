import classes from "./Skill.module.css";

const Skill = (props) => {
  return (
    <li
      className={classes["img-container"]}
      onMouseOver={props.mouseOver}
      onMouseOut={props.mouseOut}
    >
      {props.isHovered && <p className={classes.label}>{props.text}</p>}
      <img src={props.src} alt={props.alt} />
    </li>
  );
};

export default Skill;
