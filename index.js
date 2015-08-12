'use strict';

var fs = require('fs');
var path = require('path');
var graphql = require('graphql').graphql;
var introspectionQuery = require('graphql/utilities').introspectionQuery;
var assign = require('object-assign');


var defaults = {
  print: false,
  outDir: process.cwd(),
};


module.exports = function updateSchema(Schema, options) {
  var opts = assign({}, defaults, options);
  return graphql(Schema, introspectionQuery)
    .then(function(result) {
      if (result.errors) {
        if (opts.print) {
          console.error('ERROR: ', JSON.stringify(result.errors, null, 2));
        }
        return false;
      }

      try {
        fs.writeFileSync(
          path.join(opts.outDir, 'schema.json'),
          JSON.stringify(result, null, 2)
        );
        return true;
      } catch (err) {
        if (opts.print) {
          console.error('ERROR: ', err);
        }
        return false;
      }
    });
};
