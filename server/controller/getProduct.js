const fs = require("fs");

const getProduct = (id) => {
  const productData = fs.readFileSync("./model/inventory.json");
  const productArr = JSON.parse(productData);

  // if id is passed as arg get single product
  if (id !== undefined) {
    const filteredproductArr = productArr.filter(
      (product) => product.id === id
    );
    return filteredproductArr;
  } else {
    return productArr;
  }
};

module.exports = getProduct;
