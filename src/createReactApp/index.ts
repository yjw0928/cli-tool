import inquirer from "inquirer";
import { execSync } from "node:child_process";

export async function createReactApp() {
  const res = await inquirer.prompt({
    type: "input",
    name: "proName",
    message: "请输入项目名称",
  });
  execSync(`mkdir ${res.proName}`, {
    cwd: process.cwd(),
  });

  const allowTs = await inquirer.prompt({
    type: "checkbox",
    name: "typescript",
    message: "是否支持ts",
  });
  console.log(allowTs);
}

createReactApp();
