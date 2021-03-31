// VENDOR
import path from "path";

// AUTOFICA IMPORTS
// import { urlComposer } from "@autofica/common";

// IMPORTS
import { ENV_CONFIG_PATH, ENV_CONFIG_EXTENSION } from "./constants";

/** Load environment variables */
const configPath = path.join(
  __dirname,
  `${ENV_CONFIG_PATH}${process.env.NODE_ENV}${ENV_CONFIG_EXTENSION}`
);
require("dotenv").config({
  path: configPath,
});

/**woker logic */
var RSMQWorker = require("rsmq-worker");
var worker = new RSMQWorker(process.env.QUEUE_NAME);

export default worker;
