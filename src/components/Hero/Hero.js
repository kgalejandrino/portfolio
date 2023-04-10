import classes from "./Hero.module.css";
import HeroTextbox from "./HeroTextbox/HeroTextbox";
import Skills from "./Skills/Skills";

const Hero = () => {
  return (
    <section className={`${classes["section-hero"]} row`}>
      <HeroTextbox />
      <Skills />
    </section>
  );
};

export default Hero;
