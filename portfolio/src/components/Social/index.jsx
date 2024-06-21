import { FaGithub, FaLinkedin } from "react-icons/fa";

const Social = () => {
  return (
    <div className="social">
      <div className="social__link">
        <a href="https://github.com/vincent-dor" target="_blank" rel="noopener noreferrer" className="social__icon">
          <FaGithub size={25} />
        </a>
      </div>
      <div className="social__link">
        <a href="https://www.linkedin.com/in/vincent-doree-77260/" target="_blank" rel="noopener noreferrer" className="social__icon">
          <FaLinkedin size={25} />
        </a>
      </div>
    </div>
  );
};

export default Social;
