import Project from "./Project/Project";
import classes from "./Projects.module.css";
import { projects_info } from "../../libs/helper";

const Projects = () => {
  return (
    <section className={`${classes["section-projects"]} row`}>
      <h3 className="section-title">Projects</h3>
      {projects_info.map((project) => (
        <Project
          img={project.img}
          alt={project.alt}
          name={project.name}
          description={project.description}
          stacks={project.stacks}
        />
      ))}
    </section>
  );
};

export default Projects;
