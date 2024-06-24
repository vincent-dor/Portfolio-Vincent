import PropTypes from "prop-types";

const ProjectCard = ({ image, title, subtitle, description, link }) => {
  return (
    <div className="card">
      <a className="card__link" href={link} target="_blank" rel="noopener noreferrer">
        <img className="card__image" src={image} alt={`Image for ${title}`} />
        <div className="card__content">
          <h3 className="card__title">{title}</h3>
          <h4 className="card__subtitle">{subtitle}</h4>
          <p className="card__description">{description}</p>
        </div>
      </a>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
