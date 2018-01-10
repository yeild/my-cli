# my-cli [![npm package](https://img.shields.io/npm/v/my-cli.svg)](https://www.npmjs.com/package/my-cli)
A tool that can auto-generate the project template.
## How to use
Install this tool by npm:
```
$ npm install my-cli -g
```
Create your porject directory, and use "my-cli" command:
```
$ mkdir my-project && cd my-project
$ my-cli
```
This tool will help building your project structure like the GIF below.
![picture](http://ooqymz3vm.bkt.clouddn.com/cli1.gif)

## 0.2.0 update
Now you can use argv to help add your library.
```
$ my-cli -j -s -v -b
```
-j: add jQuery to your project.

-s: add Swiper to your project.

-v: add Vue to your project

-b: add Bootstrap to your project.

![picture](http://ooqymz3vm.bkt.clouddn.com/cli2.png)
