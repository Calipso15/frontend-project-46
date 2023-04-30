import path from 'path';
import fs from 'fs';
import getData from './parsers.js';
import formatData from './formatters/index.js';
import getAST from './formatters/getAST.js';

const getAbsolutPath = (filePath) => path.resolve(process.cwd(), filePath);

const readFile = (filePath) => fs.readFileSync(getAbsolutPath(filePath), 'utf-8');

const getFormat = (pathToFile) => {
  const extname = path.extname(pathToFile);
  return extname.substring(extname.lastIndexOf('.') + 1);
};

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const content1 = readFile(filePath1);
  const content2 = readFile(filePath2);

  const data1 = getData(content1, getFormat(filePath1));
  const data2 = getData(content2, getFormat(filePath2));

  const AST = getAST(data1, data2);

  return formatData(AST, format);
};

export default genDiff;
