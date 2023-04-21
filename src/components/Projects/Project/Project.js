import classes from "./Project.module.css";

const Project = (props) => {
  return (
    <div className={classes.project}>
      <div className={classes["img-container"]}>
        <img src={props.img} alt={props.alt} />
      </div>
      <div className={classes["project-details"]}>
        <h3 className={classes["project-name"]}>{props.name}</h3>
        <p className={classes["project-description"]}>{props.description}</p>
        <div className={classes["tech-stack"]}>
          {props.stacks.map((stack) => (
            <div className={classes.skill}>{stack}</div>
          ))}
        </div>
        <div className={classes.socials}>
          <span className={classes.figma}>
            <a
              href="https://www.figma.com/file/msx1RnIUa0qVwvSN0xvius/Portfolio?node-id=0%3A1&t=hiUPr5MDsQOiJabq-1"
              target="_blank"
              rel="noreferrer"
            >
              Figma<i class="fa-brands fa-figma"></i>
            </a>
          </span>
          <span className={classes.github}>
            <a
              href="https://github.com/kgalejandrino/react-ecommerce-webapp"
              target="_blank"
              rel="noreferrer"
            >
              Code<i className="fa-brands fa-github"></i>
            </a>
          </span>
        </div>
        <div className={classes.links}>
          <span>Live Demo</span>
          <p>|</p>
          <span>
            <a
              href="https://kgalejandrino.github.io/react-ecommerce-webapp/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Project;
