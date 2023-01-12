const fs = require('fs');
const readline = require('readline');

const fileName = 'src/chunks/eiVp7k/eiVp7kl1laS.js.txt';

const rl = readline.createInterface({
  input: fs.createReadStream(fileName),
  crlfDelay: Infinity,
});

rl.on('line', (content) => {
  const reg = /__d\("([\w|\.]*)",/;
  const key = content.match(reg).at(1);

  fs.writeFileSync(
    `./src/chunks/eiVp7k/chunk_${encodeURIComponent(key)}.js`,
    content,
    {
      flag: 'w+',
    },
  );
});
