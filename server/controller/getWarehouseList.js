const fs = require("fs");

const getWarehouseList = () => {
  const warehouseData = fs.readFileSync("./model/locations.json");
  const warehouseArr = JSON.parse(warehouseData);
  return warehouseArr;
};

module.exports = getWarehouseList;
