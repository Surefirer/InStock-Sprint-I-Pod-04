const express = require("express");
//const cors = require("cors");
const app = express();

// Middleware
app.use(express.json());
//app.use(cors());

app.get("/", (req, res) => {
  res.send("Home Page");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
