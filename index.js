import app from "./server.js";
import mongodb from "mongodb";
import PersonnelDAO from "./src/dao/personnelDAO.js";
import MenuDAO from "./src/dao/MenuDAO.js";
import dotenv from 'dotenv'

dotenv.config();
const { MongoClient } = mongodb;
const PORT = process.env.PORT || 5000;

async function startServer() {
  let client;
  try {
    client = await MongoClient.connect(process.env.DINER_IN_THE_SKY_DB_URI, { useUnifiedTopology: true });
    console.log("Connected to mongodb...");
  } catch (e) {
    console.error(e);
  }

  await PersonnelDAO.injectDB(client);
  await MenuDAO.injectDB(client);

  app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
  })
};


startServer();