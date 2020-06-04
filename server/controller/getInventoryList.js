const fs = require("fs");

const getInventoryList = () => {
  const inventoryData = fs.readFileSync("./model/inventory.json");
  const inventoryArr = JSON.parse(inventoryData);

  return inventoryArr;
};

module.exports = getInventoryList;
