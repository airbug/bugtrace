/*
 * Copyright (c) 2014 airbug inc. http://airbug.com
 *
 * bugtrace may be freely distributed under the MIT license.
 */


//-------------------------------------------------------------------------------
// Script
//-------------------------------------------------------------------------------

var bugpackApi  = require("bugpack");
var bugpack     = bugpackApi.loadContextSync(module);
bugpack.loadExportSync("bugtrace.BugTrace");
var BugTrace    = bugpack.require("bugtrace.BugTrace");


//-------------------------------------------------------------------------------
// Exports
//-------------------------------------------------------------------------------

module.exports = BugTrace;
