const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json());

const users = [
  {
    id: 1,
    name: "Rafath",
    email: "rafath.auvee@gmail.com",
    phone: "01993596206",
  },
  {
    id: 2,
    name: "reznov",
    email: "reznov@gmail.com",
    phone: "01993596206",
  },
  {
    id: 3,
    name: "victor",
    email: "victorauvee@gmail.com",
    phone: "01993596206",
  },
  {
    id: 4,
    name: "ben ken",
    email: "ben@gmail.com",
    phone: "01993596206",
  },
  {
    id: 5,
    name: "ryo shirai",
    email: "ryo@gmail.com",
    phone: "01993596206",
  },
  {
    id: 6,
    name: "uri adams",
    email: "uri@gmail.com",
    phone: "01993596206",
  },
  {
    id: 7,
    name: "max caster",
    email: "max@gmail.com",
    phone: "01993596206",
  },
];

app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter(user => user.name.toLowerCase().includes(search))
    res.send(matched)
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});
// app.get("/users", (req, res) => {
//   res.send({ id: 1, name: "Auvee", job: "Student" });
// });

app.listen(port, () => {
  console.log("Listening to port", port);
});
