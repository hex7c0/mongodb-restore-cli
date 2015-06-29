# [mongodb-restore-cli](http://supergiovane.tk/#/mongodb-restore-cli)

[![NPM version](https://img.shields.io/npm/v/mongodb-restore-cli.svg)](https://www.npmjs.com/package/mongodb-restore-cli)
[![Linux Status](https://img.shields.io/travis/hex7c0/mongodb-restore-cli.svg?label=linux)](https://travis-ci.org/hex7c0/mongodb-restore-cli)
[![Windows Status](https://img.shields.io/appveyor/ci/hex7c0/mongodb-restore-cli.svg?label=windows)](https://ci.appveyor.com/project/hex7c0/mongodb-restore-cli)
[![Dependency Status](https://img.shields.io/david/hex7c0/mongodb-restore-cli.svg)](https://david-dm.org/hex7c0/mongodb-restore-cli)

CLI for [`mongodb-restore`](https://github.com/hex7c0/mongodb-restore)

Similar to [mongorestore](http://docs.mongodb.org/manual/reference/program/mongorestore/)

## Installation

Install through NPM

```bash
npm install -g mongodb-restore-cli
```
or
```bash
git clone git://github.com/hex7c0/mongodb-restore-cli.git
```

## API

global cli with `-g` option
```bash
$ mongodb-restore -h

Usage:
  mongodb-restore [OPTIONS] [ARGS]

Options: 
      --verbose FILE     Save internal reporting into a logfile
      --host STRING      Specifies a resolvable hostname for the mongod 
  -p, --parser [STRING]  Data parser (bson, json) (Default is bson)
  -o, --out [STRING]     Specifies the directory where get the backup (Default is ./)
  -t, --tar STRING       Extract files from a .tar file
  -m, --metadata         Set metadata of collections as Index, ecc
  -d, --drop             Drop every collection from the target database
  -v, --version          Display the current version
  -h, --help             Display help and usage details
```

## Examples

Take a look at my [examples](examples)

### [License GPLv3](LICENSE)
