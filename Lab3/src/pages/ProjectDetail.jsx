import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ProjectDetail() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`http://localhost:5000/api/projects/${projectId}`)
      .then((res) => {
        if (res.status === 404) {
          throw new Error("Project not found");
        }
        if (!res.ok) {
          throw new Error("Failed to load project details");
        }
        return res.json();
      })
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [projectId]);

  return (
    <main style={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto" }}>
      <Link to="/projects" style={{ textDecoration: "none", color: "#0070f3" }}>
        ← Back to Projects
      </Link>

      {loading && <p style={{ marginTop: "20px" }}>Loading project details...</p>}

      {error && (
        <div style={{ marginTop: "20px", padding: "20px", border: "1px solid #ff4d4d", borderRadius: "8px" }}>
          <h2>Notice</h2>
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && project && (
        <article style={{ marginTop: "20px" }}>
          <h1>{project.title}</h1>
          <p style={{ fontSize: "1.1rem", margin: "15px 0" }}>{project.description}</p>

          <div style={{ margin: "20px 0" }}>
            <h3>Technologies Used</h3>
            <p>{Array.isArray(project.techStack) ? project.techStack.join(", ") : project.techStack}</p>
          </div>

          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              style={{ display: "inline-block", marginTop: "15px", textDecoration: "underline" }}
            >
              Visit Live Project →
            </a>
          )}
        </article>
      )}
    </main>
  );
}

export default ProjectDetail;
