import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const filePath = fileURLToPath(import.meta.url);
const dirPath = path.dirname(filePath);
const dataPath = path.join(dirPath, "../uhyo.txt");

await readFile(dataPath, 'utf8')
  .then((result) => {
    console.log(result.match(/uhyo/g)?.length);
  }, (error: unknown) => {
    console.error(error);
  });