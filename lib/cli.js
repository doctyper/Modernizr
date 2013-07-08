/* jshint node: true */
"use strict";

var fs = require("fs");
var grunt = require("grunt");

module.exports = {
  build: require("./build"),
  metadata: JSON.parse(fs.readFileSync("./metadata.json"))
};
