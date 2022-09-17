import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const filePath = fileURLToPath(import.meta.url);
const dirPath = path.dirname(filePath);
const dataPath = path.join(dirPath, "../uhyo.txt");

fs.readFile(dataPath, 'utf8', (err: unknown, data: string) => {
  if (err) {
    console.error(err);
    return ;
  }
  console.log(data.match(/uhyo/g)?.length);
});