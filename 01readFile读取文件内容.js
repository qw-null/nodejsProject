const fs = require('fs')
fs.readFile('./files/1.txt', 'utf8', function (err, data) {
    if (err) {
        console.log('读取文件失败！', err.message);

    }
    console.log(data);

})

/* 结果：
学习Node.js第一次练习
*/