const fs = require("fs");
const getProduct = require("./getProduct");

const updateProduct = (productId, productObj) => {
  const productData = getProduct();
  const productIndex = productData
    .map((product) => product.id)
    .indexOf(productId);

  const newProduct = {
    id: productObj.id,
    warehouseID: productObj.warehouseID,
    productName: productObj.productName,
    briefDescription: productObj.briefDescription,
    detailDescription: productObj.detailDescription,
    lastOrder: productObj.lastOrder,
    city: productObj.city,
    country: productObj.country,
    quantity: productObj.quantity,
    inStock: productObj.inStock,
    category: productObj.category,
  };

  productData.splice(productIndex, 1, newProduct);

  fs.writeFileSync("./model/inventory.json", JSON.stringify(productData));

  return product;
};

module.exports = updateProduct;
