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
      <form onSubmit={handleSubmit} className="contact__form">
        <div className="contact__container">
          <label htmlFor="name" className="contact__label">
            Prénom et Nom:{" "}
          </label>
          <input type="text" id="name" className="contact__input" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required />
        </div>
        <div className="contact__container">
          <label htmlFor="email" className="contact__label">
            E-mail:{" "}
          </label>
          <input type="email" id="email" className="contact__input" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
        </div>
        <div className="contact__container">
          <label htmlFor="message" className="contact__label">
            Message:{" "}
          </label>
          <textarea id="message" className="contact__input contact__send" value={message} onChange={(e) => setMessage(e.target.value)} autoComplete="message" required />
        </div>
        <button type="submit" className="button__send">Envoyer</button>
        {status && <p>{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
