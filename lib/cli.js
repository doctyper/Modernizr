/* jshint node: true */
"use strict";

var path = require("path");
var grunt = require("grunt");

var lib = path.join(__dirname);

module.exports = {
  build: require(path.join(lib, "build.js")),
  metadata: grunt.file.readJSON(path.join(lib, "metadata.json"))
};
