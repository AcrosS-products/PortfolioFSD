import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard({
  id,
  title,
  description,
  techStack,
  link
}) {
  return (
    <div className="card">
      <h2>{title}</h2>

      <p>{description}</p>

      <p>
        <strong>Tech Stack:</strong> {Array.isArray(techStack) ? techStack.join(", ") : techStack}
      </p>

      <div className="card-actions">
        {id && (
          <Link to={`/projects/${id}`} className="detail-link">
            View Details
          </Link>
        )}
        {link && link !== "#" && (
          <a href={link} target="_blank" rel="noreferrer">
            Visit Project
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;