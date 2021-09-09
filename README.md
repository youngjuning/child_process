# child-process

## child-process

> 墙裂推荐使用这个，够用且没有额外的心智负担。

```js
const { spawnSync } = require('child_process');

spawnSync("yarn install",{
  shell: true,
  stdio: 'inherit'
});
```

![image](https://user-images.githubusercontent.com/13204332/132640641-5cf686eb-1f62-48d5-99ef-93e76324f101.png)


## exec-sh

```js
const execSh = require('exec-sh').promise;

execSh('yarn install',{
  shell: true
});
```

![image](https://user-images.githubusercontent.com/13204332/132640641-5cf686eb-1f62-48d5-99ef-93e76324f101.png)

## execa

```js
const execa = require("execa");

execa.commandSync('yarn install',{
  stdout: "inherit",
  stderr: "inherit",
  shell: true,
});
```

![image](https://user-images.githubusercontent.com/13204332/132640641-5cf686eb-1f62-48d5-99ef-93e76324f101.png)

## shelljs

```js
const shell = require("shelljs");
shell.exec("yarn install");
```

![image](https://user-images.githubusercontent.com/13204332/132643279-58606264-f7f3-4fe1-a8b7-ca6b620fe1b6.png)
