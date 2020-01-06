"use strict";
let utils = require("../index");

describe('Get TimeStamp', () => {
    it('Get timestamp now', () => {
        const timenow = utils.getTimeStampNow();
        console.log("timetstamp now -- ",timenow);
     // expect(sum.add(2, 2)).toBe(4)
    });
    it('Get timestamp now with date sample', () => {
        const timenow = utils.getTimeStampNow("2020-02-3:1:30:10");
        console.log("timetstamp with date -- ",timenow);
     // expect(sum.add(2, 2)).toBe(4)
    });
  

  })