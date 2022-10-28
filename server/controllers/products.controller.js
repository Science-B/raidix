const fs = require("fs/promises");
const path = require("path");

const productsPath = path.join(__dirname, "../db.json");

async function getProducts() {
  const products = await fs.readFile(productsPath, { encoding: "utf-8" });
  return Array.isArray(JSON.parse(products)) ? JSON.parse(products) : [];
}

async function getProduct(id) {
  const products = await getProducts();
  const filtered = products.filter((product) => product.id === id);
  return filtered;
}

async function saveProducts(products) {
  await fs.writeFile(productsPath, JSON.stringify(products));
}

async function addProduct(product) {
  const products = await getProducts();
  products.push({ id: Date.now().toString(), ...product });
  await saveProducts(products);
}

async function removeProduct(id) {
  const products = await getProducts();
  const filtered = products.filter((product) => product.id !== id);
  await saveProducts(filtered);
}

async function updateProduct(productData) {
  const products = await getProducts();
  const index = products.findIndex((product) => product.id === productData.id);
  products[index] = { ...products[index], ...productData };
  await saveProducts(products);
  return products[index];
}
module.exports = {
  getProducts,
  getProduct,
  addProduct,
  removeProduct,
  updateProduct,
};
