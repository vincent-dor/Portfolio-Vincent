import { useState, useEffect } from "react";
import SkillCard from "../SkillsCard/index";
const SkillsList = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("data/skills.json")
      .then((response) => response.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error("Erreur de chargement du fichier JSON:", error));
  }, []);

  return (
    <section className="skills" id="Competence">
      <h2>Mes compétences</h2>
      <div className="skills__list">
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} link={skill.link} />
        ))}
      </div>
    </section>
  );
};

export default SkillsList;
