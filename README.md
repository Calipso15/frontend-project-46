### Hexlet tests and linter status:
[![Actions Status](https://github.com/Calipso15/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/Calipso15/frontend-project-46/actions)

[![GitHub Actions Demo](https://github.com/Calipso15/frontend-project-46/actions/workflows/jest-check.yml/badge.svg)](https://github.com/Calipso15/frontend-project-46/actions/workflows/jest-check.yml)

[![Test Coverage](https://api.codeclimate.com/v1/badges/90bdd1c2742c90f7c1ca/test_coverage)](https://codeclimate.com/github/Calipso15/frontend-project-46/test_coverage)
<a href="https://codeclimate.com/github/Calipso15/frontend-project-46/maintainability"><img src="https://api.codeclimate.com/v1/badges/90bdd1c2742c90f7c1ca/maintainability" /></a>

# Description: 
**Generator of difference** is the CLI programm that generate difference between two files. Supporting formats: JSON, YML, YAML.

## How to install:
1. Make sure you have installed [Node.js](https://nodejs.org/en/) no lower version 12: ```node -v```.
2. Clone repository: ```git@github.com:Calipso15/frontend-project-46.git```.
3. Change directory to frontend-project-46
4. Run the command: ```make install```.

```shell
$ git clone git@github.com:Calipso15/frontend-project-46.git
$ cd frontend-project-46
$ make install
```

## Run tests:
```shell
$ make test
```

## How to use:
You can use the project as a script in the terminal or as a library in your JavaScript project. You can format the difference in three styles: stylish (default), plain and json.
```shell
$ gendiff -h
Usage: gendiff [options] <filepath1> <filepath2>
Compares two configuration files and shows a difference.
Options:
  -V, --version          output the version number
  -f, --format <type>    output format (choices: "stylish", "plain", "json", default: "stylish")
  -h, --help             display help for command
```
## Project asciinemas:
### Checking json files: 
<a href="https://asciinema.org/a/77TxAc2XkIbgyaAdEa70rjNT1" target="_blank"><img src="https://asciinema.org/a/77TxAc2XkIbgyaAdEa70rjNT1.svg" /></a>

### Checking yml files: 
<a href="https://asciinema.org/a/TVuWPvnaQebSrClGjTWaeyCo6" target="_blank"><img src="https://asciinema.org/a/TVuWPvnaQebSrClGjTWaeyCo6.svg" /></a>

### Checking the stylish format:
<a href="https://asciinema.org/a/g4ONWA65EPTnofornQVECmulG" target="_blank"><img src="https://asciinema.org/a/g4ONWA65EPTnofornQVECmulG.svg" /></a>

### Checking the plain format:
<a href="https://asciinema.org/a/4EQaxwbOQgC8lLK6pNvPYhKep" target="_blank"><img src="https://asciinema.org/a/4EQaxwbOQgC8lLK6pNvPYhKep.svg" /></a>

### Checking the json format:
<a href="https://asciinema.org/a/S2SDcHGdnkXPhvSfVPowh4b3G" target="_blank"><img src="https://asciinema.org/a/S2SDcHGdnkXPhvSfVPowh4b3G.svg" /></a>
