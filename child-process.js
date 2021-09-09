const { spawnSync } = require('child_process');

spawnSync("yarn install",{
  shell: true,
  stdio: 'inherit'
})