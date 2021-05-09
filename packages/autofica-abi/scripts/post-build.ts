import fs from "fs";
import path from "path";

const copyDeclarationsToBuild = async (): Promise<void> => {
  const dir = path.resolve(__dirname, "../src/gen-types");
  if (!fs.existsSync(dir)) {
    throw new Error("Typechain didn't generate files");
  }
  const files = await fs.promises.readdir(dir);
  const srcPathBase = path.resolve(__dirname, "../src/gen-types");
  const dstPathBase = path.resolve(__dirname, "../build/gen-types");
  for (const file of files) {
    const srcPath = `${srcPathBase}/${file}`;
    const dstPath = `${dstPathBase}/${file}`;

    if (file.includes(".d.ts")) {
      console.log(`copying file into build ${dstPathBase}`);

      await fs.promises.copyFile(srcPath, dstPath);
    }
  }
};

(async () => {
  try {
    await copyDeclarationsToBuild();
  } catch (e) {
    console.error(e);
  }
})();
