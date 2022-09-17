import * as fs from 'fs';
fs.readFile('./uhyo.txt', 'utf8', (err: unknown, data: string) => {
  if (err) {
    console.error(err);
    return ;
  }
  console.log(data.match(/uhyo/g)?.length);
});