#!/usr/bin/env node

import { Command } from 'commander';
import gendiff from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0', '-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const options = program.opts();
    if (options.format === 'plain') {
      console.log(gendiff(filepath1, filepath2, 'plain'));
    } else if (options.format === 'stylish' || options.format === undefined) {
      console.log(gendiff(filepath1, filepath2, 'stylish'));
    } else if (options.format === 'json') {
      console.log(gendiff(filepath1, filepath2, 'json'));
    }
  });
program.parse();
