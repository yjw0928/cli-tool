import { program } from "commander";
import { execSync } from "child_process";
import { createReactApp } from "./createReactApp";

export function run() {
  program
    .description("初始命令")
    .option("-f, --first", "first command")
    .action(async (opts, command) => {
      console.log(opts);
    });

  program
    .command("push")
    .description("开始了")
    .option("-r,--release", "public type")
    .action((opts, command) => {
      execSync("git add .", {
        encoding: "utf-8",
      });
      console.log(process.cwd());
      execSync("git commit -am fix:'提交一下'", {
        encoding: "utf-8",
        cwd: process.cwd(),
      });
      execSync("git pull");
      execSync("git push");
      console.log("提交成功");
    });

  program
    .command("create-react-app")
    .description("生成react项目")
    .action(async (opts) => {
      await createReactApp();
      console.log("创建成功");
    });
  program.parseAsync();
}
