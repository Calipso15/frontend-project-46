import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import { expect } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(filename, 'utf-8');

const formats = ['json', 'yml'];

describe('gendiff', () => {
  const getResult = (format) => readFile(getFixturePath(format));

  test.each(formats)('gendiff & format', (format) => {
    const pathToFile1 = getFixturePath(`file1.${format}`);
    const pathToFile2 = getFixturePath(`file2.${format}`);
    expect(genDiff(pathToFile1, pathToFile2, 'stylish')).toEqual(getResult('stylish'));
    expect(genDiff(pathToFile1, pathToFile2, 'plain')).toEqual(getResult('plain.txt'));
    expect(genDiff(pathToFile1, pathToFile2, 'json')).toEqual(getResult('resultJson'));
    expect(genDiff(pathToFile1, pathToFile2)).toEqual(getResult('stylish'));
  });
});
