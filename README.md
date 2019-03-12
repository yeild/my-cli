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
![](https://img2018.cnblogs.com/blog/1150501/201903/1150501-20190312163120554-1766999470.gif)

## 0.2.0 update
Now you can use args to help add your library.
```
$ my-cli -j -s -v -b
```
-j: add jQuery to your project.

-s: add Swiper to your project.

-v: add Vue to your project

-b: add Bootstrap to your project.

![](https://img2018.cnblogs.com/blog/1150501/201903/1150501-20190312163202587-1853142646.png)
