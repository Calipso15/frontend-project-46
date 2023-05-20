import getStylish from './stylish.js';
import getJSON from './json.js';
import makePlain from './plain.js';

export default (rowData, format) => {
  switch (format) {
    case 'stylish':
      return getStylish(rowData);
    case 'json':
      return getJSON(rowData);
    case 'yml':
      return getJSON(rowData);
    case 'plain':
      return makePlain(rowData);
    default:
      throw new Error(`Unknown format: '${format}'!`);
  }
};
