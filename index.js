import app from "./server.js";
import mongodb from "mongodb";
import PersonnelDAO from "./src/dao/personnelDAO.js";
import CatalogsDAO from "./src/dao/catalogsDAO.js";
import dotenv from "dotenv";
import ProductsDAO from "./src/dao/productsDAO.js";
import OrdersDAO from "./src/dao/ordersDAO.js";
import CountersDAO from "./src/dao/countersDAO.js";

dotenv.config();
const { MongoClient } = mongodb;
export const { ObjectId } = mongodb;
const PORT = process.env.PORT || 5000;

async function startServer() {
  let client;
  try {
    client = await MongoClient.connect(process.env.DINNER_IN_THE_SKY_DB_URI, { useUnifiedTopology: true });
    console.log("Connected to mongodb...");
  } catch (e) {
    console.error(e);
  }

  await PersonnelDAO.injectDB(client, "personnel");
  await CatalogsDAO.injectDB(client, "catalogs");
  await ProductsDAO.injectDB(client, "products");
  await OrdersDAO.injectDB(client, "orders");
  await CountersDAO.injectDB(client, "counters");

  app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
  })
};


startServer();
