var fs = require('fs');
var resolve = require('path').resolve;

module.exports = function(directory, callback) {
  if (!directory || typeof directory !== 'string') {
    throw new TypeError('directory-exists expect a non-empty string as its first argument');
  }

  fs.stat(resolve(directory), function(err, stat) {
    if (err) {
      return callback(null, false);
    }
    callback(null, stat.isDirectory());
  });
};

module.exports.sync = function(directory) {
  if (!directory || typeof directory !== 'string') {
    throw new TypeError('directory-exists expect a non-empty string as its first argument');
  }

  try {
    return fs.statSync(resolve(directory)).isDirectory();
  } catch (e) {
    return false;
  }
};
