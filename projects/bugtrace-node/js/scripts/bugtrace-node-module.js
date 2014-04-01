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
