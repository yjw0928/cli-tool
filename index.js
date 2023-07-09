#!/usr/bin/env node

import { execSync } from "child_process";

import { program } from "commander";

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
    const result = execSync("git add .", {
      encoding: "utf-8",
    });
    alert(result);

    execSync("git commit -m fix: 提交一下");
    execSync("git pull");
    execSync("git push");
  });

program.parse();
