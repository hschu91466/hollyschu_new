//  PortfolioCard expects a project object shaped like:
//   { title, tech, image, link (string | null), buttonText }
//  link: null means the project has no external site (e.g. "This Site" —
//  you're already on it), so no link/button is rendered, just a status label.
const PortfolioCard = ({ project }) => {
  return (
    <div className="card-item">
      <img className="card-image" src={project.image} alt={project.title} />
      <h4 className="card-title">{project.title}</h4>
      <p className="card-tech">
        <b>Technology:</b> {project.tech}
      </p>
      {project.link ? (
        <a
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
