import fs from "fs";
import path from "path";
const generateMultiplierAbi = async (): Promise<void> => {
  try {
    const dir = path.resolve(__dirname, "../src/gen-abi/multiplier");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const files = await fs.promises.readdir(
      path.resolve(__dirname, "../MCL-SmartContracts/lending/build/contracts")
    );
    for (const file of files) {
      const srcPath = path.resolve(
        __dirname,
        `../MCL-SmartContracts/lending/build/contracts/${file}`
      );
      const dstPath = `${dir}/${file}`;
      await fs.promises.copyFile(srcPath, dstPath);
    }
  } catch (e) {
    console.error(e);
  }
};

generateMultiplierAbi();
