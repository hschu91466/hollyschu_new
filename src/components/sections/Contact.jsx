// Contact form — posts to /api/contact/send.php.
// Expects { success: boolean } in the response; on success, clears the
// form and shows a status message. See ContactController/ContactModel
// on the backend for the corresponding validation.

import { useState } from "react";
import axios from "axios";
import "../../styles/contact.css";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);
      setStatus(null);

      const res = await axios.post("/api/contact/send.php", formData);

      if (res.data.success) {
        setStatus("success");
        setFormData(initialFormState);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="contact-panel">
        <h4>Contact</h4>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="message-button"
            disabled={submitting}
            aria-busy={submitting}
          >
            {submitting ? "Sending..." : "Send"}
          </button>
        </form>

        {status === "success" && (
          <p role="status">Thanks! Your message has been sent.</p>
        )}
        {status === "error" && (
          <p role="alert">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
