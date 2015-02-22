#!/usr/bin/env node
'use strict';

process.title = 'mongodb-restore';
var VERSION = require('../package.json').version;
var cli = require('cli');

cli
.parse({
  verbose: [ false, ' Save internal reporting into a logfile', 'file' ],
  host: [ false, ' Specifies a resolvable hostname for the mongod', 'string' ],
  parser: [ 'p', ' Data parser (bson, json)', 'string', 'bson' ],
  out: [ 'o', ' Specifies the directory where get the backup', 'string', './' ],
  tar: [ 't', ' Extract files from a .tar file', 'string' ],
  metadata: [ 'm', 'Set metadata of collections as Index, ecc' ],
  version: [ 'v', 'Display the current version' ]
});

cli.main(function(args, options) {

  var self = this;
  if (options.version) {
    return console.log(process.title + ' v' + VERSION);
  } else if (args.length == 0 && !options.host) {
    self.fatal('Missing uri option');
  }

  self.spinner('Working..');
  var restore = require('mongodb-restore');
  try {
    restore({
      uri: args[0] || options.host,
      root: options.out || __dirname,
      parser: options.parser,
      tar: options.tar,
      logger: options.verbose,
      metadata: options.metadata,
      callback: function() {

        self.spinner('Working.. done\n', true);
      }
    });
  } catch (e) {
    self.spinner('Working.. error\n', true);
    console.error(e.message);
  }
});
