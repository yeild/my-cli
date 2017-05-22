#! node


var fs = require('fs');
var path = require('path');

var config = {};
process.argv.slice(2).forEach( function (item) {
  switch (item) {
    case "-j":
      config.jquery = true;
      break;
    case "-s":
      config.swiper = true;
      break;
    case "-v":
      config.vue = true;
      break;
    case "-b":
      config.bootstrap = true;
      break;
  }
});

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

var PATH = ".";
if(process.argv.length == 2) {
  copyTemplate("index_simple.html", PATH + '/index.html');
} else {
  copyTemplate("index.html", PATH + '/index.html');
}

copyTemplate("package.json", PATH + '/package.json');

mkdir(PATH + '/public', function () {
  mkdir(PATH + '/public/css',function () {
    copyTemplate("css/main.css",PATH + '/public/css/main.css');
    config.bootstrap && copyTemplate("css/bootstrap.min.css",PATH + '/public/css/bootstrap.min.css');
    config.swiper && copyTemplate("css/swiper-3.4.1.min.css",PATH + '/public/css/swiper-3.4.1.min.css')
  });
  mkdir(PATH + '/public/iconfont');
  mkdir(PATH + '/public/img');
  mkdir(PATH + '/public/js',function () {
    copyTemplate("js/main.js",PATH + '/public/js/main.js');
    config.bootstrap && copyTemplate("js/bootstrap.min.js",PATH + '/public/js/bootstrap.min.js');
    config.vue && copyTemplate("js/vue.min.js",PATH + '/public/js/vue.min.js');
    if(config.jquery) {
      copyTemplate("js/jquery-1.8.3.min.js",PATH + '/public/js/jquery-1.8.3.min.js');
      copyTemplate("js/jquery-3.1.1.min.js",PATH + '/public/js/jquery-3.1.1.min.js');
    }
    config.bootstrap && copyTemplate("js/bootstrap.min.js",PATH + '/public/js/bootstrap.min.js');
    if(config.swiper){
      if(config.jquery) {
        copyTemplate("js/swiper-3.4.1.jquery.min.js", PATH + '/public/js/swiper-3.4.1.jquery.min.js')
      } else {
        copyTemplate("js/swiper-3.4.2.min.js",PATH + '/public/js/swiper-3.4.2.min.js')
      }
    }
  })
});
mkdir(PATH + '/src', function () {
  mkdir(PATH + '/src/scss',function () {
    copyTemplate("scss/main.scss",PATH + '/src/scss/main.scss');
    mkdir(PATH + '/src/scss/base',function () {
      copyTemplate("scss/base/_common.scss",PATH + '/src/scss/base/_common.scss');
      copyTemplate("scss/base/_reset.scss",PATH + '/src/scss/base/_reset.scss');
      copyTemplate("scss/base/_variables.scss",PATH + '/src/scss/base/_variables.scss/')
    });
    mkdir(PATH + '/src/scss/component');
    mkdir(PATH + '/src/scss/helper');
    mkdir(PATH + '/src/scss/layout');
    mkdir(PATH + '/src/scss/page');
    mkdir(PATH + '/src/scss/theme')
  })
});

console.log("build complete.");
console.log(" use \"npm run sass\" to watch the sass file changes.");
