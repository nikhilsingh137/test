import React, { useState } from "react";
import Style from "./emailsend.module.scss";

const EmailSend = () => {
  const [data, setData] = useState({
    sender: "",
    reciever: "",
    subject: "",
    message: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: data.sender,
        reciever: data.reciever,
        subject: data.subject,
        message: data.message,
      }),
    };
    fetch("http://localhost:4000/sendMail", options)
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
    <div className={Style.EmailSend}>
      <div className={Style.wrapper}>
        <form onSubmit={handleSubmit}>
          <div className={Style.file}>
            <input
              type="email"
              placeholder="Sender"
              value={data.sender}
              id="sender"
              onChange={handleChange}
            />
          </div>
          <div className={Style.file}>
            <input
              type="email"
              placeholder="Reciever"
              value={data.reciever}
              id="reciever"
              onChange={handleChange}
            />
          </div>
          <div className={Style.file}>
            <input
              type="text"
              placeholder="Subject"
              value={data.subject}
              id="subject"
              onChange={handleChange}
            />
          </div>
          <div className={Style.file}>
            <textarea
              placeholder="Message"
              value={data.message}
              id="message"
              onChange={handleChange}
            ></textarea>
          </div>
          <p>{message}</p>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EmailSend;
