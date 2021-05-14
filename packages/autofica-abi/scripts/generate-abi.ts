import fs from "fs";
import path from "path";

const generateMultiplierAbi = async (): Promise<void> => {
  const config: { include: string[] } = require("../config.json");
  const abiSet = new Set(config.include);
  try {
    const dir = path.resolve(__dirname, "../src/abi/gen/multiplier");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const files = await fs.promises.readdir(
      path.resolve(
        __dirname,
        "../../MCL-SmartContracts/lending/build/contracts"
      )
    );
    console.log("FILES");
    console.log(files);
    for (const file of files) {
      const srcPath = path.resolve(
        __dirname,
        `../../MCL-SmartContracts/lending/build/contracts/${file}`
      );
      const dstPath = `${dir}/${file}`;
      if (abiSet.has(file)) {
        await fs.promises.copyFile(srcPath, dstPath);
      }
    }
  } catch (e) {
    console.error(e);
  }
};

generateMultiplierAbi();
