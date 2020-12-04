import React, { FC, FormEvent, useState } from "react";
import Title from "../Title";
import "./Contact.scss";
import { db } from "../../firebase/firebaseConfig";

const Contact: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoader(true);
    db.collection("emails")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setSent(true);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contact-page">
      <Title title={"Contact me:"}></Title>
      <article className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
            />
            <input
              type="email"
              placeholder="email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="form-control"
            />
            <textarea
              name="message *"
              placeholder="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-control"
            ></textarea>
            <span
              className={"sent-message"}
              style={{ display: sent ? " block" : "none" }}
            >
              Thanks for your message!
            </span>
          </div>
          <button
            type="submit"
            className="submit-btn btn"
            style={{ background: loader ? " hsl(210, 22%, 49%)" : " #2caeba" }}
          >
            submit
          </button>
        </form>
      </article>
    </section>
  );
};

export default Contact;
