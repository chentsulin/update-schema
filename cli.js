#!/usr/bin/env node
'use strict';

var meow = require('meow');
var updateSchema = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ update-schema [file-path]',
		'',
		'Examples',
		'  $ update-schema schema.js',
		'',
		'  $ update-schema path/schema.js',
		'',
		'Options',
    '  --print, -p  Determine whether print or not. Default: true',
		'  --out-dir, -d  Output directory. Default: __dirname',
	].join('\n'),
});

var file = cli.input[0];

var opts = {};

var print = cli.flags.print || cli.flags.p;
if (print) {
  opts.print = print;
}


var outDir = cli.outDir || cli.d;
if (outDir) {
  opts.outDir = outDir;
}

var schema;
try {
  schema = require(file);
} catch (err) {
  if (print) {
    console.error('ERROR: ', err);
  }
}


updateSchema(schema, opts);
