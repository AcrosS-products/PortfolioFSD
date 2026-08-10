import { useState } from "react";

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
    <main>
      <section>
        <h1>Get in Touch</h1>

        <form onSubmit={handleSubmit}>

          <label htmlFor="name">Name:</label>

          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          {errors.name && <p>{errors.name}</p>}


          <label htmlFor="email">Email:</label>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && <p>{errors.email}</p>}


          <label htmlFor="message">Message:</label>

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />

          {errors.message && <p>{errors.message}</p>}


          <button type="submit" disabled={!isValid}>
            Send
          </button>

        </form>
      </section>
    </main>
  );
}

export default Contact;