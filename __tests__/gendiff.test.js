import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import { expect } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const expected = readFile('stylish');

const extensions = ['json', 'yml'];

test.each([
  extensions,
])('main test', (extension) => {
  const filepath1 = getFixturePath(`file1.${extension}`);
  const filepath2 = getFixturePath(`file2.${extension}`);
  expect(genDiff(filepath1, filepath2, 'json')).toBe(expected);
  expect(genDiff(filepath1, filepath2, 'yml')).toBe(expected);
});
