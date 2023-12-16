import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPwd, setCnfPwd] = useState("");
  const [showErr, setShowErr] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("i ran");
  }

  return (
    <form className="form_container" onSubmit={handleSubmit}>
      <div className="input__container">
        <label htmlFor="email">Email: </label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="abc@xyz.com"
          required
        />
        <p className={showErr ? "error_txt" : "hide"}>Invalid email format!</p>
      </div>
      <div className="input__container">
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter a password"
          required
        />
        <p className={showErr ? "error_txt" : "hide"}>
          Password must be atleast 8 characters!
        </p>
      </div>
      <div className="input__container">
        <label htmlFor="confirm_pwd">Confirm Password: </label>
        <br />
        <input
          type="password"
          id="confirm_pwd"
          name="confirm_pwd"
          placeholder="Re-Enter the password"
          required
        />
        <p className={showErr ? "error_txt" : "hide"}>
          Passwords do not match!
        </p>
      </div>
      <button className="submitBtn" type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default Form;
