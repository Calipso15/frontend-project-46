import _ from 'lodash';
import path from 'path';
import fs from 'fs';

const getDiffInfo = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const uniq = _.uniq([...keys1, ...keys2]);
  const sortUniq = _.sortBy(uniq);
  const diff = sortUniq.map((key) => {
    if (_.has(obj1, key) && !_.has(obj2, key)) {
      return { key, value: obj1[key], status: 'delited' };
    }
    if (!_.has(obj1, key) && _.has(obj2, key)) {
      return { key, value: obj2[key], status: 'added' };
    }
    if (_.has(obj1, key) && _.has(obj2, key) && obj1[key] === obj2[key]) {
      return { key, value: obj1[key], status: 'unchanged' };
    }
    if (_.has(obj1, key) && _.has(obj2, key) && obj1[key] !== obj2[key]) {
      return { key, value: { oldValue: obj1[key], newValue: obj2[key] }, status: 'changed' };
    }
    return undefined;
  });
  return diff;
};

const getDiff = (diffInfo) => {
  const result = diffInfo.map((item) => {
    if (item.status === 'delited') {
      return (`- ${item.key}: ${item.value}`);
    }
    if (item.status === 'added') {
      return (`+ ${item.key}: ${item.value}`);
    }
    if (item.status === 'unchanged') {
      return (`  ${item.key}: ${item.value}`);
    }
    if (item.status === 'changed') {
      return (`- ${item.key}: ${item.value.oldValue}\n+ ${item.key}: ${item.value.newValue}`);
    }
    return undefined;
  });
  return `{\n${result.join('\n')}\n}`;
};

const getAbsolutPath = (filePath) => path.resolve(process.cwd(), '__fixtures__', filePath);

const readFile = (filePath) => fs.readFileSync(getAbsolutPath(filePath), 'utf-8');

const getObject = (filePath) => JSON.parse(readFile(filePath));

const genDiff = (filePath1, filePath2) => {
  const object1 = getObject(filePath1);
  const object2 = getObject(filePath2);
  return getDiff(getDiffInfo(object1, object2));
};
export default genDiff;
