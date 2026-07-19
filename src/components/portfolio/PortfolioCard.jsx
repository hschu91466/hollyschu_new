const PortfolioCard = ({ project }) => {
  return (
    <div className="card-item">
      {project.link ? (
        <a href={project.link} target="_blank" rel="noreferrer">
          <img className="card-image" src={project.image} alt={project.title} />
        </a>
      ) : (
        <img className="card-image" src={project.image} alt={project.title} />
      )}
      <h3 className="card-title">{project.title}</h3>
      <p className="card-tech">
        <b>Technology:</b> {project.tech}
      </p>
      {project.link ? (<a
  
    className="message-button"
    href={project.link}
    target="_blank"
    rel="noreferrer"
  >
    {project.buttonText}
  </a>
) : (
  <span className="message-button" aria-disabled="true">
    {project.buttonText}
  </span>
)}
    </div>
  );
};

export default PortfolioCard;
