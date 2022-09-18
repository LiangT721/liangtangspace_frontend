import React from "react";

const Contact = () => {
  return (
    <div id="contact"  className="home__contact">
      <h3 className="heading-3 home__contact__heading mb-md">Contact</h3>
      <p className="home__contact__text mb-md">
        I am now looking for any opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I will try my best to get back to you!
      </p>
      <a href="mailto:liangtang0721@gmail.com" className="link-btn__large mb-hg">Say Hello</a>
      <div className="copy mb-sm">
      &copy; Copyright 2022 Design & Built by Liang Tang
      </div>
    </div>
  );
};

export default Contact;
