import submissions from "../models/submissionsData.js";

export const submitContact = (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !name.trim()) {
    return res.status(400).json({ error: "Name is required" });
  }

  if (!email || !email.trim()) {
    return res.status(400).json({ error: "Email is required" });
  }

  if (!email.includes("@")) {
    return res.status(400).json({ error: "Invalid email format: missing '@' symbol" });
  }

  if (!message || !message.trim()) {
    return res.status(400).json({ error: "Message is required" });
  }

  const newSubmission = {
    id: Date.now().toString(),
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    createdAt: new Date().toISOString()
  };

  submissions.push(newSubmission);  
  console.log(`new submission is pushed`, submissions);
  res.status(201).json({
    message: "Contact submission received successfully",
    submission: newSubmission
  });
};

export const getSubmissions = (req, res) => {
  res.status(200).json(submissions);
};
