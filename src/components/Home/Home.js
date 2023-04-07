import classes from "./Home.module.css";

const Home = () => {
  return (
    <section className={`${classes["section-hero"]} row flex`}>
      <div className={classes.textbox}>
        <p>
          Hi, I'm <span className={classes.name}>Kevin Alejandrino</span>.
        </p>
        <h1 className={classes.title}>Front-end React Developer.</h1>
        <p>
          A passionate front-end react developer with a year of experience in
          automation testing.
        </p>
        <div className={classes.socials}>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-square-github"></i>
        </div>
      </div>
      <div>Textbox</div>
    </section>
  );
};

export default Home;
