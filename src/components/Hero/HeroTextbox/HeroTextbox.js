import classes from "./HeroTextbox.module.css";

const HeroTextbox = () => {
  return (
    <div className={classes.textbox}>
      <p>Hi, I'm</p>
      <h1 className={classes.name}>Kevin Alejandrino.</h1>
      {/* <h1 className={classes.title}>Front-end React Developer.</h1> */}
      <p className={classes.description}>
        A front-end web developer currently based in California with a passion
        for creating beautiful user interfaces using React.js.
      </p>
      <div className={classes.socials}>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-square-github"></i>
      </div>
    </div>
  );
};

export default HeroTextbox;
