import projects from "../data";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  console.log("projects:", projects);

  return (
    <main>
      <section>
        <h1>My Projects</h1>

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            image={project.image}
            link={project.link}
          />
        ))}
      </section>
    </main>
  );
}

export default Projects;