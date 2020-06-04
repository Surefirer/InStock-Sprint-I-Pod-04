const express = require("express");
const cors = require("cors");
const app = express();

const getWarehouseList = require("./model/locations.json");
const getInventoryList = require("./controller/getInventoryList");
const getProduct = require("./controller/getProduct");

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Home Page");
});

// api info endpoint for warehouse
app.get("/warehouse", (req, res) => {
  res.json(getWarehouseList);
});

// api info endpoint for inventory item
app.get("/inventory", (req, res) => {
  res.json(getInventoryList());
});

// dynamic path using an id as a param
app.get("/inventory/:id", (req, res) => {
  const productId = req.params.id;
  res.json(getProduct(productId));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
