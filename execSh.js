const execSh = require('exec-sh').promise;

(async () => {
  await execSh('yarn install',{
    shell: true
  })
})()