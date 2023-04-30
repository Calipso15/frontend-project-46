import getStylish from './stylish.js';
import getJSON from './json.js';

export default (rowData, format) => {
  switch (format) {
    case 'stylish':
      return getStylish(rowData);
    case 'json':
      return getJSON(rowData);
    case 'yml':
      return getJSON(rowData);
    default:
      throw new Error(`Unknown format: '${format}'!`);
  }
};
