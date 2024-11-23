const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const { connectTodb, getData } = require("./db");
const port = 4000;
const app = express();
app.use(express.json());
app.use(cors());

let db;

connectTodb((err) => {
  if (!err) {
    app.listen(port, "localhost", () => {
      console.log("Server is running");
    });
  }
  db = getData();
});
app.get("/product", (req, res) => {
  db.collection("HomeApi")
    .find()
    .toArray()
    .then((value) => {
      res.status(200).json(value);
    });
});

app.post("/post", (req, res) => {
  const { name, email, number, password, confirmPassword } = req.body;
  db.collection("Post")
    .insertOne({ name, email, number, password, confirmPassword })
    .then((value) => {
      res.status(200).json(value);
    });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  db.collection("Post")
    .findOne({ email, password })
    .then((value) => {
      if (value) {
        res.json({ message: "Login Successfully" });
      } else {
        res.json({ message: "Login Failed" });
      }
    });
});

const tranport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nikhilsurvanshi137@gmail.com",
    pass: "nbiw yaqt zins mzxa",
  },
});

app.post("/notification", (req, res) => {
  const { email } = req.body;

  const mailOptions = {
    from: "youremail@gmail.com",
    to: "nikhilsurvanshi137@gmail.com",
    subject: "New Email Submission",
    text: `A new Email was submitted ${email}`,
  };

  tranport.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.json({ message: "Email is not submiited" });
    } else {
      res.json({ message: "Email is send" });
    }
  });
});

app.post("/sendMail", (req, res) => {
  const { sender, reciever, subject, message } = req.body;

  const tranport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: sender,
      pass: "nbiw yaqt zins mzxa",
    },
  });

  const mailOptions = {
    from: sender,
    to: reciever,
    subject: subject,
    text: message,
  };

  tranport.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.send({ message: "Email not send" });
    } else {
      res.send({ message: "Email is send" });
    }
  });
});
