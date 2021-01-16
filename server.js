import express from "express";
import personnel from "./src/api/personnel.route.js";
import menu from "./src/api/menu.route.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use("/api/personnel", personnel);
app.use("/api/menu", menu);

export default app;