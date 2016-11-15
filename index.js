'use strict';

var moment = require('moment');
var downloads = require('downloads');
var stats = require('download-stats');

module.exports = function(options, cb) {
  if (typeof options === 'function') {
    cb = options;
    options = {};
  }
  options = options || {};
  var today = moment.utc().subtract(1, 'days');

  if (options.repo) {
    downloads.repo(options.repo, function(err, results) {
      if (err) return cb(err);
      var repo = {
        name: options.repo,
        yesterday: stats.calc.last(1, results, today),
        lastWeek: stats.calc.last(7, results, today),
        lastMonth: stats.calc.last(30, results, today),
        total: stats.calc.total(results)
      };

      cb(null, [repo]);
    })
  } else if (options.maintainer) {
    downloads.maintainer(options.maintainer, {limit: 5}, function(err, results) {
      if (err) return cb(err);
      var repos = Object.keys(results).map(function(key) {
        var repo = results[key];
        return {
          name: key,
          yesterday: stats.calc.last(1, repo, today),
          lastWeek: stats.calc.last(7, repo, today),
          lastMonth: stats.calc.last(30, repo, today),
          total: stats.calc.total(repo)
        };
      })
      .sort(function(a, b) {
        if (a.lastMonth > b.lastMonth) return 1;
        if (a.lastMonth < b.lastMonth) return -1;
        return 0;
      });

      cb(null, repos);
    });
  } else {
    var msg = [
      'Usage:',
      '',
      '  $ downloads <repo-name> [options]',
      ''
    ].join('\n');

    cb(new Error(msg));
    return;
  }
};
