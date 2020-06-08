const express = require("express");
const cors = require("cors");
const app = express();

const getWarehouseList = require("./controller/getWarehouseList");
const getInventoryList = require("./controller/getInventoryList");
const getProduct = require("./controller/getProduct");
const updateProduct = require("./controller/updateProduct");
const createNewInventory = require("./controller/createNewInventory");
const addNewLocation = require("./controller/addNewLocation");

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Home Page");
});

// api info endpoint for warehouse
app
  .get("/locations", (req, res) => {
    res.json(getWarehouseList());
  })
  .post("/locations", (req, res) => {
    res.json(addNewLocation(req.body));
  });

// api info endpoint for inventory item
app
  .get("/inventory", (req, res) => {
    res.json(getInventoryList());
  })
  .post("/inventory", (req, res) => {
    res.json(createNewInventory(req.body));
  });

// dynamic path using an id as a param
app.get("/inventory/:id", (req, res) => {
  const productId = req.params.id;
  res.json(getProduct(productId));
});

// update existing product
app.put("/inventory/:id", (req, res) => {
  res.json(updateProduct(req.params.id, req.body));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
