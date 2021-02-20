import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from 'url';
import personnel from "./src/api/personnel.route.js";
import catalogs from "./src/api/catalogs.route.js";
import menu from "./src/api/menu.route.js"
import orders from "./src/api/orders.route.js";
import cors from "cors";
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());

app.use(express.json());
app.use("/api", personnel);
app.use("/api", catalogs);
app.use("/api", menu);
app.use("/api", orders);

app.use(express.static(path.join(__dirname, "client", "build")));

app.get ('/*', function (req, res) {
  res.sendFile (path.join (__dirname, "client", 'build', 'index.html'));
});

export default app;