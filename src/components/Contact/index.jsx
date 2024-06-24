import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://formspree.io/f/xdknnkgv", {
        name,
        email,
        message,
      });

      if (response.status === 200) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Failed to send message.");
      console.error("Error:", error);
    }
  };

  return (
    <section id="Contact" className="contact">
      <h2>Me contacter:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Prénom et nom:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} autoComplete="message" required />
        </div>
        <button type="submit">Send</button>
        {status && <p>{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
