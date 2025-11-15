// server.js
require("dotenv").config();
const express = require("express");
const app = express();

// JSON parser
app.use(express.json());

//serve static files
app.use(express.static("public"));

// Custom Middleware: Request Logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// GET /
app.get("/", (req, res) => {
  res.send("My Week 2 API!");
});

// POST /user
app.post("/user", (req, res) => {
  const { id, name } = req.body;

  if (!id || !name) {
    return res.status(400).json({ error: "Missing id or name" });
  }

  res.json({
    message: `User[${id}] profile`,
    data: { id, name },
  });
});

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
