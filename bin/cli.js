#!/usr/bin/env node
var Table = require('cli-table');
var cyan = require('ansi-cyan');
var cli = require('../');

var argv = require('yargs-parser')(process.argv.slice(2), {
  default: {
    format: 'table'
  },
  alias: {
    format: 'f',
    maintainer: 'm'
  }
});


var options = argv;
if (argv._.length) {
  options.repo = argv._[0];
}

if (options.maintainer) {
  delete options.repo;
}

cli(options, function(err, downloads) {
  if (err) {
    console.error('error getting downloads for [' + options.repo || options.maintainer + ']', err);
    console.error(err.message);
    process.exit(1);
    return;
  }

  var format = (typeof options.format === 'string') ? options.format.toLowerCase() : options.format;
  var formatFn = formatters[format] || formatters.noop;
  console.log(formatFn(downloads));
  process.exit(0);
});

var formatters = {
  table: function(downloads) {
    return createTable(downloads);
  },
  json: function(downloads) {
    return JSON.stringify(downloads, null, 2);
  },
  noop: function(downloads) {
    return downloads;
  }
};

function createTable(downloads) {
  var head = ['module', 'yesterday', 'last week', 'last month', 'total'];
  var colWidths = [40, 15, 15, 15, 15];
  var colAligns = ['left', 'right', 'right', 'right', 'right'];

  var table = new Table({
    style: {compact: true},
    head: head,
    colWidths: colWidths,
    colAligns: colAligns
  });

  var totals = {
    yesterday: 0,
    lastWeek: 0,
    lastMonth: 0,
    total: 0
  };

  for (var i = 0; i < downloads.length; i++) {
    var repo = downloads[i];
    var row = [
      repo.name,
      formatNumber(repo.yesterday),
      formatNumber(repo.lastWeek),
      formatNumber(repo.lastMonth),
      formatNumber(repo.total)
    ];

    totals.yesterday += repo.yesterday;
    totals.lastWeek += repo.lastWeek;
    totals.lastMonth += repo.lastMonth;
    totals.total += repo.total;
    table.push(row);
  }

  if (downloads.length > 1) {
    // empty row to separate summary
    table.push([]);
    table.push(['', cyan('yesterday'), cyan('last week'), cyan('last month'), cyan('total')]);
    table.push([]);

    // summary row
    var summary = [
      `${downloads.length} modules`,
      formatNumber(totals.yesterday),
      formatNumber(totals.lastWeek),
      formatNumber(totals.lastMonth),
      formatNumber(totals.total)
    ];
    table.push(summary);
  }

  return table.toString();
}

function formatNumber(num) {
  num = '' + num;
  var len = num.length;
  if (len <= 3) return num;
  var parts = len / 3;
  var i = len % 3;
  var first = '', last = '';
  if (i === 0) {
    i = 3;
  }
  first = num.substr(0, i);
  last = num.substr(i);
  var res = first + ',' + formatNumber(last);
  return res;
}
