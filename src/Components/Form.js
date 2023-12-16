import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPwd, setCnfPwd] = useState("");
  const [validEmail, setEmailState] = useState("");
  const [validPwd, setPwdState] = useState("");
  const [validCnfPwd, setCnfState] = useState("");
  //   const [allowSubmit, submitState] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    if (validEmail && validPwd && validCnfPwd) {
      console.log("i ran");
      // allowSubmit(true);
    } else {
      alert("Please check the fields");
    }
  }

  function handleEmail(e) {
    console.log(e.target.value);
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
          value={email}
          onChange={(e)=>handleEmail(e)}
          //   required
        />
        <p className={validEmail ? "hide" : "error_txt"}>
          Invalid email format!
        </p>
      </div>
      <div className="input__container">
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter a password"
          value={password}
          onChange={(e)=>handleEmail(e)}
          //   required
        />
        <p className={validPwd ? "hide" : "error_txt"}>
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
          value={cnfPwd}
          onChange={(e)=>handleEmail(e)}
          //   required
        />
        <p className={validCnfPwd ? "hide" : "error_txt"}>
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
