import path from "path";
import fs from "fs";
const { Command } = require("commander");
const chalk = require("chalk");
const log = console.log;
const program = new Command();
program.version("1.0.0");
program
  .option("-d, --devDependencies", "Remove dev dependencies")
  .option("-p, --peerDependencies", "Remove Peer dendencies")
  .option("--all", "Remove Peer dendencies");
program.parse(process.argv);
const options: {
  peerDependencies?: boolean;
  devDependencies?: boolean;
} = program.opts();

async function* getFiles(
  dir: string,
  isroot: boolean
): AsyncGenerator<any, any, any> {
  const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = path.resolve(dir, dirent.name);
    if (
      dirent.isDirectory() &&
      (dirent.name != "node_modules" || isroot == true)
    ) {
      yield* getFiles(res, false);
    } else {
      if (dirent.name == "package.json") {
        yield { manifestPath: res, dirPaths: dir };
      }
    }
  }
}

const main = async () => {
  const currPath = process.cwd();
  const stack = await fs.promises.readdir(
    path.resolve(currPath, "node_modules")
  );
  const manifestFile:
    | {
        devDependencies?: { [key: string]: string };
        peerDependencies?: { [key: string]: string };
      }
    | null
    | undefined = require(path.resolve(currPath, "./package.json"));

  if (manifestFile == null) {
    log(chalk.yellow(`DEPREM no package.json found in ${currPath}`));
    return;
  }
  const dependencyManifests: Array<{
    manifestPath: string;
    dirPaths: string;
  }> = [];
  for await (const f of getFiles("node_modules", true)) {
    dependencyManifests.push(f);
  }

  if (options.devDependencies) {
    const devDependencies = manifestFile.devDependencies;

    if (devDependencies == null) {
      log(
        chalk.yellow(
          `DEPREM no devDependencies found in package.json ${currPath}`
        )
      );
      return;
    }
    for (const manifest of dependencyManifests) {
      const { name } = require(manifest.manifestPath);
      if (name != null && devDependencies[name] != null) {
        await fs.promises.rmdir(manifest.dirPaths, { recursive: true });
        log(
          chalk.green(
            `DEPREM removed devDependency in package.json ${manifest.dirPaths}`
          )
        );
      }
    }
  }

  if (options.peerDependencies) {
    const peerDependencies = manifestFile.peerDependencies;

    if (peerDependencies == null) {
      log(
        chalk.yellow(
          `DEPREM no peerDependencies found in package.json ${currPath}`
        )
      );
      return;
    }
    for (const manifest of dependencyManifests) {
      const { name } = require(manifest.manifestPath);
      if (name != null && peerDependencies[name] != null) {
        await fs.promises.rmdir(manifest.dirPaths, { recursive: true });
        log(
          chalk.green(
            `DEPREM removed peerDependency in package.json ${manifest.dirPaths}`
          )
        );
      }
    }
  }
};

(async () => {
  try {
    await main();
  } catch (e) {
    log(chalk.red(`DEPREM EXITED WITH ERROR`));
    console.error(e);
    process.exit(1);
  }
})();
