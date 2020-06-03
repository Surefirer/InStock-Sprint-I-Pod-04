const fs = require("fs");

const getItemList = () => {
  const itemData = fs.readFileSync("./model/items.json");

  const mappeditemData = JSON.parse(itemData).map((item) => {
    return {
      id: item.id,
      productName: item.productName,
      description: item.description,
      lastOrder: item.lastOrder,
      location: item.location,
      quantity: item.quantity,
      inStock: item.inStock,
      category: item.category,
    };
  });

  return mappeditemData;
};

module.exports = getItemList;
