function ProjectCard({
  title,
  description,
  techStack,
  link
}) {
  return (
    <div>
      <h2>{title}</h2>

      <p>{description}</p>

      <p>
        {techStack.join(", ")}
      </p>

      <a href={link} target="_blank" rel="noreferrer">
        Visit Project
      </a>
    </div>
  );
}

export default ProjectCard;