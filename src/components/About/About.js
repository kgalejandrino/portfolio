import classes from "./About.module.css";
import my_photo from "../../assets/my_photo.png";

const About = () => {
  return (
    <section className={`${classes.about} row`}>
      <div className={classes["about-left"]}>
        <h3 className="section-title">About Me</h3>
        <h3 className={classes.role}>
          Front-end Developer / Test Automation Engineer
        </h3>
        <p></p>
      </div>
      <div className={classes["about-right"]}>
        <img src={my_photo} alt="Kevin working on his laptop" />
      </div>
    </section>
  );
};

export default About;
