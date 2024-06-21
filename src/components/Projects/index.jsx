import { useState, useEffect } from "react";
import ProjectCard from "../ProjectsCard/index";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Erreur de chargement du fichier JSON:", error));
  }, []);

  return (
    <section className="projects" id="Projects">
      <h2>Mes Projets</h2>
      <div className="projects__list">
        {projects.map((project, index) => (
          <ProjectCard key={index} image={project.image} title={project.title} subtitle={project.subtitle} description={project.description} link={project.link} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
