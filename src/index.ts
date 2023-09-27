import { program } from "commander";
import { execSync } from "child_process";

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

      // execSync("git commit -m fix: 提交一下");
      // execSync("git pull");
      // execSync("git push");
      console.log("提交成功");
    });

  program.parse();
}
