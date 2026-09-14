import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import "./Project.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProjects = () => {
    setLoading(true);
    setError(null);

    fetch("http://localhost:5000/api/projects")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Server error: " + res.status);
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setError("Unable to load projects from server. Check if backend is running.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <main>
      <h1>My Projects</h1>

      {loading && <p style={{ textAlign: "center", padding: "20px" }}>Loading projects...</p>}

      {error && (
        <div style={{ textAlign: "center", color: "#ff4d4d", padding: "20px" }}>
          <p>{error}</p>
          <button 
            onClick={fetchProjects} 
            style={{ marginTop: "10px", padding: "8px 16px", cursor: "pointer" }}
          >
            Retry
          </button>
        </div>
      )}

      {!loading && !error && (
        <section className="cards">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              image={project.image}
              link={project.link}
            />
          ))}
        </section>
      )}
    </main>
  );
}

export default Projects;