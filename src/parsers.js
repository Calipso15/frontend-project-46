import yaml from 'js-yaml';

const getData = (content, type) => {
  switch (type) {
    case 'json':
      return JSON.parse(content);

    case 'yml':
      return yaml.load(content);

    default:
      throw new Error(`Unknown type: '${type}'!`);
  }
};

export default getData;
