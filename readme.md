# directory-exists
[![Build Status](https://travis-ci.org/timmydoza/directory-exists.svg?branch=master)](https://travis-ci.org/timmydoza/directory-exists)

## Why?
Because fs.exists is deprecated and sometimes you just need to know if a directory exists or not.

## Usage:

`npm install directory-exists`

`var directoryExists = require('directory-exists')`

### Asynchronous

```
directoryExists(directory, callback(result) {
  //result is a boolean
};
```

### Synchronous

```
directoryExists.sync(directory); //returns boolean
```
