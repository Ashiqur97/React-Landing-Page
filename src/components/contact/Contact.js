import React from "react";
import "./ContactStyles.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="form-container">
          <form>
            <h1>
              <span>Contact</span> Me
            </h1>
            <div>
              <label>Name</label>
              <input type="text" placeholder="Enter name" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="Enter email" />
            </div>
            <div>
              <label>Message</label>
              <textarea rows="10" placeholder="Enter Description" />
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
