const { spawnSync, execSync } = require('child_process');

spawnSync("yarn install",{
  shell: true,
  stdio: 'inherit'
})

const gitConfig = spawnSync("git config --get user.name", {
  stdio: 'pipe',
  encoding: 'utf-8',
  shell: true,
})
console.log(gitConfig.stdout.trim());

const name = execSync('git config --get user.name')
console.log(name.toString().trim());