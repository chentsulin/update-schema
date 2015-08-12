#!/usr/bin/env node
'use strict';

require('babel/register')({});

var meow = require('meow');
var path = require('path');
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
    '  --print, -p  Determine whether print or not. Default: false',
		'  --out-dir, -d  Output directory. Default: process.cwd()',
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


var Schema;
try {
  Schema = require(path.join(process.cwd(), file)).Schema;

  updateSchema(Schema, opts);
} catch (err) {
  if (print) {
    console.error('ERROR: ', err);
  }
}
