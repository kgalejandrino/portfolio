import useTooltip from "../../../hooks/use-tooltip";
import classes from "./Skills.module.css";
import html from "../../../assets/html.png";
import css from "../../../assets/css.png";
import javascript from "../../../assets/js.png";
import react from "../../../assets/react.png";
import python from "../../../assets/python.png";
import Skill from "./Skill";

const Skills = () => {
  const {
    isHovering: htmlIsHovered,
    handleMouseOver: htmlMouseOver,
    handleMouseOut: htmlMouseOut,
  } = useTooltip();

  const {
    isHovering: cssIsHovered,
    handleMouseOver: cssMouseOver,
    handleMouseOut: cssMouseOut,
  } = useTooltip();

  const {
    isHovering: jsIsHovered,
    handleMouseOver: jsMouseOver,
    handleMouseOut: jsMouseOut,
  } = useTooltip();

  const {
    isHovering: reactIsHovered,
    handleMouseOver: reactMouseOver,
    handleMouseOut: reactMouseOut,
  } = useTooltip();

  const {
    isHovering: pythonIsHovered,
    handleMouseOver: pythonMouseOver,
    handleMouseOut: pythonMouseOut,
  } = useTooltip();

  return (
    <div className={classes.container}>
      <ul className={classes["tech-stack"]}>
        <Skill
          src={html}
          alt="HTML logo"
          text="HTML"
          mouseOver={htmlMouseOver}
          mouseOut={htmlMouseOut}
          isHovered={htmlIsHovered}
        />
        <Skill
          src={css}
          alt="HTML logo"
          text="CSS"
          mouseOver={cssMouseOver}
          mouseOut={cssMouseOut}
          isHovered={cssIsHovered}
        />
        <Skill
          src={javascript}
          alt="HTML logo"
          text="JavaScript"
          mouseOver={jsMouseOver}
          mouseOut={jsMouseOut}
          isHovered={jsIsHovered}
        />
        <Skill
          src={react}
          alt="HTML logo"
          text="React"
          mouseOver={reactMouseOver}
          mouseOut={reactMouseOut}
          isHovered={reactIsHovered}
        />
        <Skill
          src={python}
          alt="HTML logo"
          text="Python"
          mouseOver={pythonMouseOver}
          mouseOut={pythonMouseOut}
          isHovered={pythonIsHovered}
        />
      </ul>
    </div>
  );
};

export default Skills;
