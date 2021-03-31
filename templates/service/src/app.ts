// VENDOR
import express from "express";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";

// AUTOFICA IMPORTS
import { urlComposer } from "@autofica/common";

// IMPORTS
import { ENV_CONFIG_PATH, ENV_CONFIG_EXTENSION } from "./constants";
import controller from "./controller";

/** Load environment variables */
const configPath = path.join(
  __dirname,
  `${ENV_CONFIG_PATH}${process.env.NODE_ENV}${ENV_CONFIG_EXTENSION}`
);
require("dotenv").config({
  path: configPath,
});

const app = express();
/** Middleware */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(urlComposer("prefix"), controller);

export default app;
