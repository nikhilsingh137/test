import React, { useState } from "react";
import Style from "./login.module.scss";

const Login = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e: any) => {
    const newData = { ...inputData, [e.target.id]: e.target.value };
    setInputData(newData);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (inputData.email === "") {
      setError("Please Enter Email");
    } else {
      setError("");
    }

    if (inputData.password === "") {
      setError1("Please Enter Password");
    } else {
      setError1("");
    }

    if (inputData.email !== "" || inputData.password !== "") {
      const options: RequestInit = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: inputData.email,
          password: inputData.password,
        }),
      };
      fetch("http://localhost:4000/login", options)
        .then((res) => res.json())
        .then((value) => {
          if (value.message) {
            setMessage(value.message);
          }
        });
    }
  };
  return (
    <div className={Style.Login}>
      <div className={Style.wrapper}>
        <form onSubmit={handleSubmit}>
          <div className={Style.Inputbox}>
            <input
              type="text"
              placeholder="Email"
              id="email"
              value={inputData.email}
              onChange={handleChange}
            />
            <span>{error}</span>
          </div>
          <div className={Style.Inputbox}>
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={inputData.password}
              onChange={handleChange}
            />
            <span>{error1}</span>
          </div>
          <p>{message}</p>
          <button>Submit</button>
        </form>
        <div className={Style.link}>
          Please create a account <a href="/SignUp">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
