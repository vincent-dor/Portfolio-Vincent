import PropTypes from "prop-types";

const SkillCard = ({ name, icon, link }) => {
  return (
    <div className="cardSkill">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={icon} className="cardSkill__logo" alt={`${name} logo`} />
        
      </a><p className="cardSkill__title">{name}</p>
    </div>
  );
};

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SkillCard;
