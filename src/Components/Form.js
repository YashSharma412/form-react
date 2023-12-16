import React, { useState, useEffect } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPwd, setCnfPwd] = useState("");

  const [validEmail, setEmailState] = useState(false);
  const [validPwd, setPwdState] = useState(false);
  const [validCnfPwd, setCnfState] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (validEmail && validPwd && validCnfPwd) {
        alert("User Login Info Saved Successfully")
        console.log("email :", email)
        console.log("password: ", password)
        console.log("cnf password: ", cnfPwd)
        setEmail("")
        setPassword("")
        setCnfPwd("")
    } else {
      alert("Please check the fields");
    }
  }

  useEffect(()=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(email)){
        setEmailState(true);
    }else{
        setEmailState(false);
    }
  },[email])

  useEffect(()=>{
    if (password.length >= 8) {
        setPwdState(true);
    } else {
        setPwdState(false);
    }
  },[password])

  useEffect(()=>{
    if (password === cnfPwd) {
        setCnfState(true);
    } else {
        setCnfState(false);
    }
  },[cnfPwd])
  
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
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
            // required
        />
        <p className={(email !== "")?(validEmail ? "hide" : "error_txt"):"hide"}>
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
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
          //   required
        />
        <p className={(password !== "")?(validPwd ? "hide" : "error_txt"):"hide"}>
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
          onChange={(e)=>setCnfPwd(e.target.value)}
          value={cnfPwd}
          //   required
        />
        <p className={(cnfPwd !== "")?(validCnfPwd ? "hide" : "error_txt"):"hide"}>
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
