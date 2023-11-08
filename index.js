import express from "express";
import { initApp } from "./Src/Utils/initapp.js";
import path from "path";
import { config } from "dotenv";
config({ path: path.resolve("onfig/dev.env") });
const app = express();

initApp(app,express);
