/*
 * Copyright (c) 2014 airbug inc. http://airbug.com
 *
 * bugtrace may be freely distributed under the MIT license.
 */


//-------------------------------------------------------------------------------
// Annotations
//-------------------------------------------------------------------------------

//@Export('bugtrace.BugTrace')

//@Require('Class')
//@Require('Obj')
//@Require('Proxy')
//@Require('Trace')


//-------------------------------------------------------------------------------
// Context
//-------------------------------------------------------------------------------

require('bugpack').context("*", function(bugpack) {

    //-------------------------------------------------------------------------------
    // BugPack
    //-------------------------------------------------------------------------------

    var Class   = bugpack.require('Class');
    var Obj     = bugpack.require('Obj');
    var Proxy   = bugpack.require('Proxy');
    var Tracer  = bugpack.require('Tracer');


    //-------------------------------------------------------------------------------
    // Declare Class
    //-------------------------------------------------------------------------------

    /**
     * @class
     * @extends {Obj}
     */
    var BugTrace = Class.extend(Obj, {
        _name: "bugtrace.BugTrace"
    });


    //-------------------------------------------------------------------------------
    // Proxy Static Methods
    //-------------------------------------------------------------------------------

    Proxy.proxy(BugTrace, Proxy.object(Tracer), [
        "$error",
        "$name",
        "$trace",
        "$traceWithError",
        "enable",
        "getNamedStack"
    ]);


    //-------------------------------------------------------------------------------
    // Export
    //-------------------------------------------------------------------------------

    bugpack.export('bugtrace.BugTrace', BugTrace);
});
