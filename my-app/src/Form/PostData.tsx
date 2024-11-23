import React, { useState } from "react";
import Style from "./postData.module.scss";

const PostData = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [error4, setError4] = useState("");
  const [submit, setSubmit] = useState(true);

  const handleChange = (e: any) => {
    const newData = { ...inputData, [e.target.id]: e.target.value };
    setInputData(newData);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (inputData.name === "") {
      setError("Please Enter Name");
    } else {
      setError("");
    }

    if (inputData.email === "") {
      setError1("Please Enter Email");
    } else {
      setError1("");
    }

    if (inputData.number === "") {
      setError2("Please Enter Number");
    } else if (inputData.number.length !== 10) {
      setError2("Please Enter 10 Digit Number");
    } else {
      setError2("");
    }

    if (inputData.password === "") {
      setError3("Please Enter Password");
    } else {
      setError3("");
    }

    if (inputData.confirmPassword === "") {
      setError4("Please Enter Confirm Password");
    } else if (inputData.confirmPassword !== inputData.password) {
      setError4("Please Enter Same Password");
    } else {
      setError4("");
    }

    if (
      inputData.name === "" ||
      inputData.email === "" ||
      inputData.number === "" ||
      inputData.password === "" ||
      inputData.confirmPassword === ""
    ) {
      setSubmit(true);
    } else {
      setSubmit(false);
    }

    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inputData.name,
        email: inputData.email,
        number: inputData.number,
        password: inputData.password,
        confirmPassword: inputData.confirmPassword,
      }),
    };
    fetch("http://localhost:4000/post", options).then((res) => res.json());
  };
  return (
    <div className={Style.postData}>
      <div className={Style.wrapper}>
        {submit ? (
          <form onSubmit={handleSubmit}>
            <div className={Style.Inputbox}>
              <input
                type="text"
                placeholder="Name"
                id="name"
                value={inputData.name}
                onChange={handleChange}
              />
              <span>{error}</span>
            </div>
            <div className={Style.Inputbox}>
              <input
                type="email"
                placeholder="Email"
                id="email"
                value={inputData.email}
                onChange={handleChange}
              />
              <span>{error1}</span>
            </div>
            <div className={Style.Inputbox}>
              <input
                type="number"
                placeholder="Number"
                id="number"
                value={inputData.number}
                onChange={handleChange}
              />
              <span>{error2}</span>
            </div>
            <div className={Style.Inputbox}>
              <input
                type="password"
                placeholder="Password"
                id="password"
                value={inputData.password}
                onChange={handleChange}
              />
              <span>{error3}</span>
            </div>
            <div className={Style.Inputbox}>
              <input
                type="password"
                placeholder="Confirm Password"
                id="confirmPassword"
                value={inputData.confirmPassword}
                onChange={handleChange}
              />
              <span>{error4}</span>
            </div>
            <button>Submit</button>
          </form>
        ) : (
          <p>Your Form is Submitted</p>
        )}
      </div>
    </div>
  );
};

export default PostData;
