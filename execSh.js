const execSh = require('exec-sh').promise;

execSh('yarn install',{
  shell: true
})