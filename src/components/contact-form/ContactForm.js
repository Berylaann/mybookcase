import { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, message);
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label for="name">Name</label>
          <input
            type="text"
            value={name}
            id="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label for="email-address">Email Address</label>
          <input
            type="email"
            value={email}
            id="email-address"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label for="message">Message</label>
          <textarea
            value={message}
            id="message"
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Message: {message}</p>
      </div>
    </>
  );
}

export default ContactForm;
