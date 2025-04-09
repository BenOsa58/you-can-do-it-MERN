import React from "react";

const Contact = () => {
  return (
    <div className="contact-info">
      <h1 className="charity">YOU CAN DO IT CHARITY </h1>
      <h2>Contact Us</h2>
      <p>
        <strong>Address:</strong> Tempelhofer Damm 133-137, Berlin, Germany
      </p>
      <p>
        <strong>Phone:</strong> <a href="tel:+4917631388428">(0176) 31388428</a>
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:info.youcandoitcharity@gmail.com">
          info.youcandoitcharity@gmail.com
        </a>
      </p>
      <p>
        <strong>Facebook:</strong>{" "}
        <a
          href="https://www.facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          You Can Do It Charity
        </a>
      </p>
    </div>
  );
};

export default Contact;
