import _ from 'lodash';

const indent = 4; // количество пробелов на один уровень
const initial = 2; // отступ влево

const stringify = (val, depth) => {
  if (!_.isObject(val)) {
    return val;
  }

  const keys = Object.keys(val);

  const result = keys.map((el) => {
    const currentDepth = (depth + 1) * indent;
    const currentValue = `${stringify(val[el], depth + 1)}`;
    return `\n${' '.repeat(currentDepth + initial)}  ${el}: ${currentValue}\n${' '.repeat(currentDepth)}`;
  });

  return `{${result.join('')}}`;
};

const getStylish = (rowData, depth) => {
  const tree = rowData.map((el) => {
    const currentIndent = ' '.repeat((depth) * indent + initial);

    switch (el.type) {
      case 'unchanged':
        return `${currentIndent}  ${el.key}: ${stringify(el.value, depth)}`;
      case 'nested':
        return `${currentIndent}  ${el.key}: ${getStylish(el.children, depth + 1)}`;
      case 'added':
        return `${currentIndent}+ ${el.key}: ${stringify(el.value, depth)}`;
      case 'deleted':
        return `${currentIndent}- ${el.key}: ${stringify(el.value, depth)}`;
      case 'changed':
        return `${currentIndent}- ${el.key}: ${stringify(el.valueBefore, depth)}\n${currentIndent}+ ${el.key}: ${stringify(el.valueAfter, depth)}`;
      default:
        throw new Error(`Unknown type ${el.type}`);
    }
  });

  return `{\n${tree.join('\n')}\n${' '.repeat(depth * indent)}}`;
};

export default (ast) => getStylish(ast, 0);
