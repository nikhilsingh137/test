import React, { useState } from "react";

const EmailNotification = () => {
  const [data, setData] = useState({ email: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
      }),
    };
    fetch("http://localhost:4000/notification", options)
      .then((res) => res.json())
      .then((value) => {
        if (value.message) {
          setMessage(value.message);
        }
      });
  };
  const handleChange = (e: any) => {
    const newData = { ...data, [e.target.id]: e.target.value };
    setData(newData);
  };
  return (
    <div style={{ width: "1300px", margin: " 30px auto" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={data.email}
            id="email"
            onChange={handleChange}
            style={{
              width: "100%",
              height: "45px",
              border: "solid 2px #808",
              paddingInlineStart: "10px",
              borderRadius: "8px",
              outline: "none",
              fontSize: "16px",
              color: "#666",
              fontWeight: "500",
            }}
          />
        </div>
        <p>{message}</p>
        <button
          style={{
            width: "200px",
            height: "45px",
            border: "solid 2px #808",
            borderRadius: "8px",
            fontSize: "16px",
            background: "#0000ff",
            color: "#fff",
            fontWeight: "500",
            marginTop: "20px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmailNotification;
