const fs = require("fs");
const getProduct = require("./getProduct");

const updateProduct = (productId, productObj) => {
  const productData = getProduct();
  const productIndex = productData
    .map((product) => product.id)
    .indexOf(productId);

  const product = {
    briefDescription: productObj.briefDescription,
    lastOrder: productObj.lastOrder,
    quantity: productObj.quantity,
  };

  productData.splice(productIndex, 1, product);

  fs.writeFileSync("./model/inventory.json", JSON.stringify(productData));

  return product;
};

module.exports = updateProduct;
