const fs = require('fs');

fs.readFile('./files/成绩.txt', 'utf8', function (err, data) {
  if (err) {
    console.log('读取文件出错！', err.message);

  } else {
    // console.log('读取文件成功', data)
    // 1.把成绩根据空格进行分割
    const arr = data.split(' ');
    // 2.对数组每一项进行字符串替换
    let newArr = arr.map((item) => {
      return item.replace('=', ':');
    })
    console.log(newArr);
    // 3.合并新数组每一项，得到一个新的字符串
    console.log(newArr.join('\r\n'));

    // 4.将内容写入新的文件
    fs.writeFile('./files/成绩-ok.txt', newArr.join('\r\n'), function (err) {
      if (err) {
        console.log('写入文件失败！');

      } else {
        console.log('写入文件成功！');

      }
    })
  }
})

