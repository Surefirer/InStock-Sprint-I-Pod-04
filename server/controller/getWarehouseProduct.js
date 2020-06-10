const fs = require("fs");

const getWarehouseProduct = (id) => {
  const productData = fs.readFileSync("./model/inventory.json");
  const productArr = JSON.parse(productData);

  if (id !== undefined) {
    const filteredproductArr = productArr.filter(
      (product) => product.warehouseID === id
    );
    return filteredproductArr;
  } else {
    return productArr;
  }
};

module.exports = getWarehouseProduct;
