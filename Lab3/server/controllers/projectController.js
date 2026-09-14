import projects from "../models/projectsData.js";

export const getAllProjects = (req, res) => {
  res.status(200).json(projects);
};

export const getProjectById = (req, res) => {
  const projectId = req.params.id;
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return res.status(404).json({ error: "Project not found" });
  }
  console.log(`projects are sent to frontend`);
  res.status(200).json(project);
};
