const execa = require("execa");

execa.commandSync('yarn install',{
  stdout: "inherit",
  shell: true,
})