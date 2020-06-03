const fs = require("fs");

const getWarehouseList = () => {
  const warehouseData = fs.readFileSync("./model/warehouses.json");

  const mappedWarehouseData = JSON.parse(warehouseData).map((warehouse) => {
    return {
      id: warehouse.id,
      name: warehouse.name,
      address: warehouse.address,
      contactName: warehouse.contactName,
      position: warehouse.position,
      phoneNumber: warehouse.position,
      email: warehouse.email,
    };
  });

  return mappedWarehouseData;
};

module.exports = getWarehouseList;
