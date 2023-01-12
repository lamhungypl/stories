const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('src/chunks/someChunk2/someChunk2.js.txt'),
  crlfDelay: Infinity,
});

rl.on('line', (content) => {
  const reg = /__d\("([\w|\.|$|\d|\-|\/]*)",/;
  if (!content.match(reg)) {
    console.log(content);
  }
  const key = content.match(reg).at(1);

  fs.writeFileSync(
    `./src/chunks/someChunk2/chunk_${encodeURIComponent(key)}.js`,
    content,
    {
      flag: 'w+',
    },
  );
});
