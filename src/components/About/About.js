import classes from "./About.module.css";
import my_photo from "../../assets/my_photo.png";
import Skills from "./Skills/Skills";

const About = () => {
  return (
    <section className={`${classes.about} row`}>
      <div className={classes["about-image"]}>
        <img src={my_photo} alt="Kevin working on his laptop" />
      </div>
      <div className={classes["about-textbox"]}>
        <h3 className="section-title">About Me</h3>
        <h3 className={classes.role}>
          Front-end Developer / Test Automation Engineer
        </h3>
        <p className={classes.text}>
          Hello, I'm Kevin Alejandrino, a dedicated front-end react developer
          with a strong desire to learn and grow in the field of web
          development.
        </p>
        <p className={classes.text}>
          I discovered my love for web development during my studies and quickly
          realized that it was the perfect blend of creativity and
          problem-solving. With a solid foundation in HTML, CSS, and JavaScript,
          I am eager to take on new challenges and expand my knowledge in
          front-end development.
        </p>
        <p className={classes.text}>
          I enjoy turning wireframes and mockups into responsive and visually
          appealing websites. I am proficient in utilizing tools such as Figma
          and frameworks like React to enhance the user experience and optimize
          the development process.
        </p>
        <p className={classes.text}>
          Here are a few technologies I’ve been working with recently:
        </p>
        <Skills />
      </div>
    </section>
  );
};

export default About;
