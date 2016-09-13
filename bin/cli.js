#!/usr/bin/env node
'use strict';

process.title = 'mongodbRestore';
var VERSION = require('../package.json').version;
var cli = require('cli');
var restore = require('mongodb-restore');

cli.parse({
  verbose: [ false, 'Save internal reporting into a logfile', 'file' ],
  host: [ false, 'Specifies a resolvable hostname for the mongod', 'string' ],
  parser: [ 'p', 'Data parser (bson, json)', 'string', 'bson' ],
  out: [ 'o', 'Specifies the directory where get the backup', 'string', './' ],
  tar: [ 't', 'Extract files from a .tar file', 'string' ],
  metadata: [ 'm', 'Set metadata of collections as Index, ecc' ],
  drop: [ 'd', 'Drop every collection from the target database' ],
  version: [ 'v', 'Display the current version' ]
});

cli.setApp(process.title, VERSION).main(function(args, options) {

  var self = this;

  if (options.version) {
    return console.log(process.title + ' v' + VERSION);
  } else if (args.length === 0 && !options.host) {
    self.fatal('Missing uri option');
  }

  self.spinner('Working..');
  try {
    restore({
      uri: args[0] || options.host,
      root: options.out || __dirname,
      parser: options.parser,
      tar: options.tar,
      logger: options.verbose,
      metadata: options.metadata,
      drop: options.drop,
      callback: function(err) {

        if (err) {
          self.spinner('Working.. error\n', true);
          self.error(err.message);
        } else {
          self.spinner('Working.. done\n', true);
        }
      }
    });
  } catch (e) {
    self.spinner('Working.. error\n', true);
    self.error(e.message);
  }
});
