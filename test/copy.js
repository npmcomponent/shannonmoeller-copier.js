/*jshint node:true */
/*global assert, describe, it */
/**
 * @fileOverview
 * copy Tests File
 *
 * @author Shannon Moeller
 * @version 1.0
 */

'use strict';

var copy = require('..');

describe('copy()', function() {
    it('should copy properties from multiple objects to a target object', function() {
        copy({}, { a: 1, b: 2 }, { b: 3, c: 4 }).should.eql({ a: 1, b: 3, c: 4 });
    });

    it('should modify the target object, not the others', function() {
        var foo = { a: 1, b: 2 };
        var bar = { b: 3, c: 4 };

        copy(foo, bar);

        foo.should.eql({ a: 1, b: 3, c: 4 });
        bar.should.eql({ b: 3, c: 4 });
    });
});
