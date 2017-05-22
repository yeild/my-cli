# my-cli
A tool that can auto-generate the project template.
## How to use 
First install this tool by npm:
```
$ npm install my-cli -g
```
Then create your porject directory, and use "my-cli" like this:
```
$ mkdir my-project && cd my-project
$ my-cli
```
This tool will help building your project structure like the picture below. Enjoy coding!
![picture](http://ooqymz3vm.bkt.clouddn.com/cli.gif)

## 0.2.0 update
Now you can use command to help add your library.
```
$ my-cli -j -s -v b
```
-j: add jQuery to your project.
-s: add Swiper to your project.
-v: add Vue to your project.
-b: add Bootstrap to your project.

Your project looks like this now.
![picture](http://ooqymz3vm.bkt.clouddn.com/cli2.jpg)