const execa = require("execa");

execa.commandSync('yarn install',{
  stdout: "inherit",
  stderr: "inherit", // https://github.com/sindresorhus/execa/issues/473
  shell: true,
});

const {stdout: username} = execa.commandSync('git config --get user.name');
console.log(username);
