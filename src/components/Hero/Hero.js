import classes from "./Hero.module.css";
import HeroTextbox from "./HeroTextbox/HeroTextbox";

const Hero = () => {
  return (
    <section className={`${classes["section-hero"]} row`}>
      <HeroTextbox />
    </section>
  );
};

export default Hero;
