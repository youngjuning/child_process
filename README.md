# child-process

## exec-sh、child-process（推荐）

```js
const execSh = require('exec-sh').promise;

execSh('yarn install',{
  shell: true
})
```

```js
const { spawnSync } = require('child_process');

spawnSync("yarn install",{
  shell: true,
  stdio: 'inherit'
})
```

![image](https://user-images.githubusercontent.com/13204332/132640641-5cf686eb-1f62-48d5-99ef-93e76324f101.png)


## execa

```js
const execa = require("execa");

execa.commandSync('yarn install',{
  stdout: "inherit",
  shell: true,
})
```

![image](https://user-images.githubusercontent.com/13204332/132640461-50b16c2d-9f9b-48b0-b842-65b193feef4b.png)

## shelljs

```js
const shell = require("shelljs");
shell.exec("yarn install");
```

![image](https://user-images.githubusercontent.com/13204332/132643279-58606264-f7f3-4fe1-a8b7-ca6b620fe1b6.png)
