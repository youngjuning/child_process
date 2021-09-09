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

## execa

> 本来第一个推荐这个，但是一个[小问题](https://github.com/sindresorhus/execa/issues/473)坑我很久，所以排第二了。

```js
const execa = require("execa");

execa.commandSync('yarn install',{
  stdout: "inherit",
  stderr: "inherit",
  shell: true,
});
```

![image](https://user-images.githubusercontent.com/13204332/132640641-5cf686eb-1f62-48d5-99ef-93e76324f101.png)

## exec-sh

> 这个也可用，但是有点脱裤子放屁的感觉，不如直接用 `spawnSync`。

```js
const execSh = require('exec-sh').promise;

(async () => {
  await execSh('yarn install',{
    shell: true
  })
})()
```

![image](https://user-images.githubusercontent.com/13204332/132640641-5cf686eb-1f62-48d5-99ef-93e76324f101.png)

## shelljs

> 这是唯一一个不能满足需求的库，但是这个库的核心功能其实是封装了很多 shell 方法，但是也有点脱裤子放屁，我直接用 execa 也可以直接执行任何命令呀。

```js
const shell = require("shelljs");
shell.exec("yarn install");
```

![image](https://user-images.githubusercontent.com/13204332/132643279-58606264-f7f3-4fe1-a8b7-ca6b620fe1b6.png)
