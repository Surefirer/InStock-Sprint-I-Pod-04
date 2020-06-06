const fs = require("fs");
const getInventoryList = require("./getInventoryList");
// const { uuid } = require("uuid");

// saving newly created inventory to the existing data
const createNewInventory = (data) => {
  const inventoryData = getInventoryList();

  const newInventory = {
    id: data.id,
    productName: data.productName,
    briefDescription: data.briefDescription,
    lastOrder: data.lastOrder,
    city: "Toronto",
    country: "CAN",
    quantity: data.quantity,
    inStock: true,
  };

  inventoryData.push(newInventory);

  fs.writeFileSync("./model/inventory.json", JSON.stringify(inventoryData));

  return inventoryData;
};

module.exports = createNewInventory;
