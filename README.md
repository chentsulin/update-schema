# update-schema

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david_img]][david_site]

> A module and cli tool for updating graphql schema


## Install

```
$ npm install update-schema
```


## Usage

```js
var updateSchema = require('update-schema');
var schema = require('./data/schema');

updateSchema(schema, options);
//=>
```


## CLI

```
$ npm install -g update-schema
```

## CLI Usage

```
$ update-schema --help

  Usage
    update-schema [file-path]

  Example
    update-schema schema.js

    update-schema path/schema.js

  Options
    --print, -p  Determine whether print or not. Default: true
    --out-dir, -d  Output directory. Default: __dirname
```


## API

### updateSchema(schema, [options])

#### schema

*Required*
Type: `GraphQLSchema`

GraphQL Schema.

#### options

##### print

Type: `boolean`
Default: `false`

Determine whether print or not.

##### outDir

Type: `string`
Default: `__dirname`

Output directory.


## License

MIT © [C.T. Lin](https://github.com/chentsulin/update-schema)

[npm-image]: https://img.shields.io/npm/v/update-schema.svg?style=flat-square
[npm-url]: https://npmjs.org/package/update-schema
[travis-image]: https://travis-ci.org/chentsulin/update-schema.svg
[travis-url]: https://travis-ci.org/chentsulin/update-schema
[coveralls-image]: https://img.shields.io/coveralls/chentsulin/update-schema.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/chentsulin/update-schema
[david_img]: https://img.shields.io/david/chentsulin/update-schema.svg
[david_site]: https://david-dm.org/chentsulin/update-schema

