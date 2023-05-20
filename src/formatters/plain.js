import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }

  return _.isString(value) ? `'${value}'` : value;
};

const makePlain = (diff) => {
  const iter = (tree, parent) => tree
    .filter((node) => node.type !== 'unchanged')
    .flatMap((node) => {
      const path = [...parent, node.key].join('.');

      switch (node.type) {
        case 'added':
          return `Property '${path}' was added with value: ${stringify(node.value)}`;
        case 'deleted':
          return `Property '${path}' was removed`;
        case 'changed':
          return `Property '${path}' was updated. From ${stringify(node.valueBefore)} to ${stringify(node.valueAfter)}`;
        case 'nested':
          return `${iter(node.children, [path]).join('\n')}`;
        default:
          throw new Error(`Type: ${node.type} is undefined`);
      }
    });

  const plainDiff = iter(diff, []);
  return [...plainDiff].join('\n');
};

export default makePlain;
