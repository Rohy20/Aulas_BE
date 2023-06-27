const url = require('url');

const endereco = 'http://spiderverse/main?universe=1610&local=ny&name=miles_morales';
const data = url.parse(endereco, true);

console.log(data.host);
console.log(data.pathname);
console.log(data.search);

const queryData = data.query;

console.log(queryData.universe);
console.log(queryData.local);
console.log(queryData.name);