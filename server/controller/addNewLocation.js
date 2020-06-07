const fs = require("fs");
const getWarehouseList = require("./getWarehouseList");

// saving newly created inventory to the existing data
const addNewLocation = (data) => {
  const warehouseData = getWarehouseList();

  const newLocation = {
    id: data.id,
    name: data.name,
    address: data.address,
    contactName: data.contactName,
    position: data.position,
    phoneNumber: data.phoneNumber,
    email: data.email,
    categories: data.categories,
  };

  warehouseData.push(newLocation);

  fs.writeFileSync("./model/locations.json", JSON.stringify(warehouseData));

  return warehouseData;
};

module.exports = addNewLocation;
