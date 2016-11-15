# downloads-cli [![NPM version](https://img.shields.io/npm/v/downloads-cli.svg?style=flat)](https://www.npmjs.com/package/downloads-cli) [![NPM downloads](https://img.shields.io/npm/dm/downloads-cli.svg?style=flat)](https://npmjs.org/package/downloads-cli)

> Commandline application for retrieving npm download counts for the specified repository or maintainer.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save downloads-cli
```

## Usage

Once installed globally, there will be a `downloads` command that can be run from the command line.

To see the download counts for a module, specify the module name after the `downloads` command like this:

```sh
$ downloads micromatch
```

Example output from running `$ downloads micromatch`:

![image](https://cloud.githubusercontent.com/assets/995160/20294018/1faa9486-aac9-11e6-811c-ad4f99205b13.png)

## Formatting

Use the `--format` option to format the results as a table (this is the default).

Run the following command to the downloads formatted as a table:

```sh
$ downloads micromatch --format
```

![image](https://cloud.githubusercontent.com/assets/995160/20294018/1faa9486-aac9-11e6-811c-ad4f99205b13.png)

If you need to use the results as a JSON object, use the `--format` command with `json` after it:

```sh
$ downloads micromatch --format json
```

```json
[
  {
    "name": "micromatch",
    "yesterday": 298701,
    "lastWeek": 1667018,
    "lastMonth": 7561132,
    "total": 72246952
  }
]
```

This can be output to a json file using the `bash` `>` character:

```sh
$ downloads micromatch --format json > micromatch-downloads.json
```

## Maintainer

To get downloads for all of the modules maintained by a specific maintainer, use the `--maintainer` or `-m` option:

```sh
$ downloads --maintainer doowb
```

This shows a table with a summary for the maintainer's total counts:

![image](https://cloud.githubusercontent.com/assets/995160/20294121/cfd3aea6-aac9-11e6-93f6-7af233bfd5f1.png)

The `--format` option will also work with `--maintainer` to return a `json` array of necessary:

```json
[
  ...
  {"name": "micromatch", "yesterday": 298701, "lastWeek": 1667018, "lastMonth": 7561132, "total": 72246952},
  {"name": "for-in", "yesterday": 302578, "lastWeek": 1690801, "lastMonth": 7689845, "total": 67525375},
  {"name": "isobject", "yesterday": 312044, "lastWeek": 1740065, "lastMonth": 7737220, "total": 78639385},
  {"name": "object.omit", "yesterday": 331758, "lastWeek": 1861300, "lastMonth": 8183602, "total": 67385807},
  {"name": "is-number", "yesterday": 362636, "lastWeek": 2010066, "lastMonth": 8844787, "total": 81522342},
  {"name": "expand-range", "yesterday": 362678, "lastWeek": 2011777, "lastMonth": 8856168, "total": 79453005},
  {"name": "braces", "yesterday": 363642, "lastWeek": 2016279, "lastMonth": 8952292, "total": 82014801},
  {"name": "kind-of", "yesterday": 386582, "lastWeek": 2182171, "lastMonth": 9699790, "total": 106232096},
  {"name": "is-glob", "yesterday": 404976, "lastWeek": 2255831, "lastMonth": 9965800, "total": 78215744},
  {"name": "repeat-string", "yesterday": 480270, "lastWeek": 2705665, "lastMonth": 11891614, "total": 107677170},
  {"name": "window-size", "yesterday": 593891, "lastWeek": 3291254, "lastMonth": 13714362, "total": 141107634}
]
```

## About

### Related projects

* [dependents-cli](https://www.npmjs.com/package/dependents-cli): CLI for listing an npm module's dependent projects and their download stats. | [homepage](https://github.com/doowb/dependents-cli "CLI for listing an npm module's dependent projects and their download stats.")
* [downloads](https://www.npmjs.com/package/downloads): Retrieve npm download stats for the specified repository or maintainer. | [homepage](https://github.com/doowb/downloads "Retrieve npm download stats for the specified repository or maintainer.")
* [npm-api](https://www.npmjs.com/package/npm-api): Base class for retrieving data from the npm registry. | [homepage](https://github.com/doowb/npm-api "Base class for retrieving data from the npm registry.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Please read the [contributing guide](contributing.md) for avice on opening issues, pull requests, and coding standards.

### Building docs

_(This document was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme) (a [verb](https://github.com/verbose/verb) generator), please don't edit the readme directly. Any changes to the readme must be made in [.verb.md](.verb.md).)_

To generate the readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-generate-readme && verb
```

### Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

### Author

**Brian Woodward**

* [github/doowb](https://github.com/doowb)
* [twitter/doowb](http://twitter.com/doowb)

### License

Copyright © 2016, [Brian Woodward](https://github.com/doowb).
Released under the [MIT license](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.2.0, on November 15, 2016._