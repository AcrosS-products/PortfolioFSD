import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function validate() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validate()) {
      alert("Message submitted!");
    }
  }

  const isValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.message.trim();

  return (
    <main className="contact-page">
      <section className="contact-section">
        <p className="contact-label">CONTACT</p>

        <h1 className="contact-title">Get in Touch</h1>

        <p className="contact-description">
          Have a question or want to work together? Feel free to send me a
          message.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>

            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
            />

            {errors.name && (
              <p className="form-error">{errors.name}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />

            {errors.email && (
              <p className="form-error">{errors.email}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="6"
            />

            {errors.message && (
              <p className="form-error">{errors.message}</p>
            )}
          </div>

          <button
            className="contact-button"
            type="submit"
            disabled={!isValid}
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;