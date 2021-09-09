# child_process

## child_process

### 执行 `yarn install`

```js
const { spawnSync } = require('child_process');

spawnSync("yarn install",{
  shell: true,
  stdio: 'inherit'
});
```

![image](https://user-images.githubusercontent.com/13204332/132640641-5cf686eb-1f62-48d5-99ef-93e76324f101.png)

### 获取 `git config` 信息

#### spawnSync

- [How to read child_process.spawnSync stdout with stdio option 'inherit'](https://stackoverflow.com/questions/35689080/how-to-read-child-process-spawnsync-stdout-with-stdio-option-inherit)

```js
const { spawnSync } = require('child_process');
const gitConfig = spawnSync("git config --get user.name", {
  stdio: 'pipe',
  encoding: 'utf-8',
  shell: true,
})
console.log(gitConfig.stdout.trim());
```

#### execSync

- [vue-cli git-user.js](https://unpkg.com/browse/vue-cli@2.9.6/lib/git-user.js)

```js
const { execSync } = require('child_process');
console.log(gitConfig.stdout.trim());

const name = execSync('git config --get user.name')
console.log(name.toString().trim());
```

## execa

### 执行 `yarn install`

> 一个[小问题](https://github.com/sindresorhus/execa/issues/473)坑我很久。

```js
const execa = require("execa");

execa.commandSync('yarn install',{
  stdout: "inherit",
  stderr: "inherit",
  shell: true,
});
```

![image](https://user-images.githubusercontent.com/13204332/132640641-5cf686eb-1f62-48d5-99ef-93e76324f101.png)

### 获取 `git config` 信息

```js
const execa = require("execa");

const {stdout: username} = execa.commandSync('git config --get user.name');
console.log(username);
```

## exec-sh

### 执行 `yarn install`

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

### 执行 `yarn install`

> 这是唯一一个不能满足需求的库，但是这个库的核心功能其实是封装了很多 shell 方法，但是也有点脱裤子放屁，我直接用 execa 也可以直接执行任何命令呀。

```js
const shell = require("shelljs");
shell.exec("yarn install");
```

![image](https://user-images.githubusercontent.com/13204332/132643279-58606264-f7f3-4fe1-a8b7-ca6b620fe1b6.png)
