import React, { FC } from "react";
import Title from "../Title";
import "./Contact.scss";

const Contact: FC = () => {
  return (
    <section className="contact-page">
      <Title title={"Contact me:"}></Title>
      <article className="contact-form">
        <form action="" method="POST">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="name *"
              className="form-control"
            />
            <input
              type="email"
              placeholder="email *"
              name="email"
              className="form-control"
            />
            <textarea
              name="message *"
              placeholder="message"
              className="form-control"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn btn">
            submit
          </button>
        </form>
      </article>
    </section>
  );
};

export default Contact;
