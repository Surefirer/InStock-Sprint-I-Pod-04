const fs = require("fs");

const getWarehouse = (id) => {
  const warehouseData = fs.readFileSync("./model/locations.json");
  const warehouseArr = JSON.parse(warehouseData);

  if (id !== undefined) {
    const filteredWarehouseArr = warehouseArr.filter(
      (warehouse) => warehouse.id === id
    );
    return filteredWarehouseArr;
  } else {
    return warehouseArr;
  }
};

module.exports = getWarehouse;
