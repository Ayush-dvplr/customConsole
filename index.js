import dotenv from "dotenv";
import express from "express";

import "./utils/customConsole.js";

import { testing } from "./controller/testing.controller.js";

const app = express();
dotenv.config();

app.get("/", testing);

console.dev("Consoling from home route");
app.listen(3000);
