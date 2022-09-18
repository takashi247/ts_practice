import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const sleepReject = (duration: number) => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(reject, duration);
  });
};

const filePath = fileURLToPath(import.meta.url);
const dirPath = path.dirname(filePath);
const dataPath = path.join(dirPath, "../uhyo.txt");

const p_race = Promise.race([
  await readFile(dataPath, 'utf8'),
  sleepReject(1)
]);

p_race.then((result) => {
  if (typeof result === "string") {
    console.log(result.match(/uhyo/g)?.length);
  }
}, (error: unknown) => {
  console.error(error);
})