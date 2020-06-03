const express = require("express");
//const cors = require("cors");
const app = express();

const getWarehouseList = require("./controller/getWarehouseList.js");
const getItemList = require("./controller/getItemList.js");

// Middleware
app.use(express.json());
//app.use(cors());

app.get("/", (req, res) => {
  res.send("Home Page");
});

// api info endpoint for warehouse
app.get("/warehouse", (req, res) => {
  res.json(getWarehouseList());
});

// api info endpoint for inventory item
app.get("/inventory", (req, res) => {
  res.json(getItemList());
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
