const path = require('path');

const fpath = '/a/b/c/d/index.html';

const fullName = path.basename(fpath);
console.log(fullName);

const nameWithoutExt = path.basename(fpath, '.html');
console.log(nameWithoutExt);
