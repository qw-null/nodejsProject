const fs = require('fs')

fs.writeFile('./files/2.txt', '写入文件内容', function (err) {
  // 文件写入成功返回nul，写入失败返回一个错误对象
  console.log(err);
})