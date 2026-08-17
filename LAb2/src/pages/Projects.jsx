import projects from "../data";
import ProjectCard from "../components/ProjectCard";
import "./Project.css"
function Projects() {
  console.log("projects:", projects);

  return (
    <main>
      <h1>My Projects</h1>
      <section className="cards">
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