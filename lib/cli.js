/* jshint node: true */
"use strict";

var grunt = require("grunt");

module.exports = {
  build: require("./build"),
  metadata: grunt.file.readJSON("./metadata.json")
};
