const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('src/chunks/someChunk6/someChunk6.js.txt'),
  crlfDelay: Infinity,
});

rl.on('line', (content) => {
  const reg = /__d\("([\w|\.|$|\d|\-|\/]*)",/;
  if (!content.match(reg) || content.length === 0) {
    console.log(content);
  }
  const key = content.match(reg).at(1);

  fs.writeFileSync(
    `./src/chunks/someChunk6/chunk_${encodeURIComponent(key)}.js`,
    content,
    {
      flag: 'w+',
    },
  );
});
