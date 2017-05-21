#! node

var fs = require('fs');
var path = require('path');

function copyTemplate (from, to) {
  from = path.join(__dirname, 'templates', from);
  write(to, fs.readFileSync(from, 'utf-8'))
}
function write (path, str, mode) {
  fs.writeFileSync(path, str)
}
function mkdir (path, fn) {
  fs.mkdir(path, function (err) {
    fn && fn()
  })
}
var PATH = "."
copyTemplate("index.html", PATH + '/index.html')
copyTemplate("package.json", PATH + '/package.json')
mkdir(PATH + '/public', function () {
  mkdir(PATH + '/public/css',function () {
    copyTemplate("css/main.css",PATH + '/public/css/main.css')
  })
  mkdir(PATH + '/public/iconfont')
  mkdir(PATH + '/public/img')
  mkdir(PATH + '/public/js',function () {
    copyTemplate("js/main.js",PATH + '/public/js/main.js')
  })
})
mkdir(PATH + '/src', function () {
  mkdir(PATH + '/src/scss',function () {
    copyTemplate("scss/main.scss",PATH + '/src/scss/main.scss')
    mkdir(PATH + '/src/scss/base',function () {
      copyTemplate("scss/base/_common.scss",PATH + '/src/scss/base/_common.scss')
      copyTemplate("scss/base/_reset.scss",PATH + '/src/scss/base/_reset.scss')
      copyTemplate("scss/base/_variables.scss",PATH + '/src/scss/base/_variables.scss/')
    })
    mkdir(PATH + '/src/scss/component')
    mkdir(PATH + '/src/scss/helper')
    mkdir(PATH + '/src/scss/layout')
    mkdir(PATH + '/src/scss/page')
    mkdir(PATH + '/src/scss/theme')
  })
})
console.log("all jobs done.")
console.log(" use \"npm run sass\" to watch the sass file changes.")