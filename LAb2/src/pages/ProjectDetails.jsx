import { useParams, Link } from "react-router-dom";
import projects from "../data";

function ProjectDetails() {
  const { projectId } = useParams();

  const project = projects.find(
      (project) => project.id === projectId
  );

  return (
    <main>
      <h1>{project.title}</h1>

      <p>{project.description}</p>

      <p>
        <strong>Tech Stack:</strong>{" "}
        {project.techStack.join(", ")}
      </p>

      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
      >
        Visit Project
      </a>
    </main>
  );
}

export default ProjectDetails;