import _ from 'lodash';
import path from 'path';
import fs from 'fs';
import getData from './parsers.js';

const getDiffInfo = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const uniq = _.uniq([...keys1, ...keys2]);
  const sortUniq = _.sortBy(uniq);

  const result = sortUniq.map((key) => {
    if (!_.has(obj1, key)) {
      return (`  + ${key}: ${obj2[key]}`);
    }
    if (!_.has(obj2, key)) {
      return (`  - ${key}: ${obj1[key]}`);
    }
    if (obj1[key] !== obj2[key]) {
      return (`  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}`);
    }
    if (_.has(obj1, key) && _.has(obj2, key) && obj1[key] === obj2[key]) {
      return (`    ${key}: ${obj1[key]}`);
    }
    return undefined;
  });
  return `{\n${result.join('\n')}\n}`;
};

const getAbsolutPath = (filePath) => path.resolve(process.cwd(), filePath);

const readFile = (filePath) => fs.readFileSync(getAbsolutPath(filePath), 'utf-8');

const getObject = (filePath) => getData(readFile(filePath), filePath.split('.')[1]);

const genDiff = (filePath1, filePath2) => {
  const object1 = getObject(filePath1);
  const object2 = getObject(filePath2);
  return getDiffInfo(object1, object2);
};

export default genDiff;
