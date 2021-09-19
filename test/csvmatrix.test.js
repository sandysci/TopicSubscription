"use strict";
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let fs = require('fs');
const { expect } = chai;
chai.use(chaiHttp);
const csvfilepath = fs.readFileSync(`${__dirname}/matrix.csv`);

/**
 * Test CSV matrix Echo endpoint with the matrix.csv file in the test directory
 */
describe('CSV Matrix Echo', () => {
    it('Get CSV Matrix Echo ', async () => {
        const res  = await  chai.request(server)
            .post('/echo')
            .set('content-type', 'multipart/form-data')
            .attach('file', csvfilepath,'matrix.csv')
            console.log("CSV Matrix Echo Result","\n", res.text);
            expect(res.status).to.equal(200);
            expect(res.text).to.be.a("string");
            expect(res.text).to.be.eq("1,2,3\n4,5,6\n7,8,9");


    });

  

  });
/**
 * Test CSV matrix Invert endpoint with the matrix.csv file in the test directory
 */
describe('CSV Matrix Invert', () => {
    it('Get CSV Matrix Invert ', async () => {
        const res  = await  chai.request(server)
            .post('/invert')
            .set('content-type', 'multipart/form-data')
            .attach('file', csvfilepath,'matrix.csv')
        console.log("CSV Matrix Invert Result","\n", res.text);
        expect(res.status).to.equal(200);
        expect(res.text).to.be.a("string");
        expect(res.text).to.be.eq("1,4,7\n2,5,8\n3,6,9\n");


    });



});

/**
 * Test CSV matrix flatten endpoint with the matrix.csv file in the test directory
 */
describe('CSV Matrix Flatten', () => {
    it('Get CSV Matrix Flatten ', async () => {
        const res  = await  chai.request(server)
            .post('/flatten')
            .set('content-type', 'multipart/form-data')
            .attach('file', csvfilepath,'matrix.csv')
        console.log("CSV Matrix Flatten Result","\n", res.text);
        expect(res.status).to.equal(200);
        expect(res.text).to.be.a("string");
        expect(res.text).to.be.eq("1,2,3,4,5,6,7,8,9");


    });



});

/**
 * Test CSV matrix sum endpoint with the matrix.csv file in the test directory
 */
describe('CSV Matrix Sum', () => {
    it('Get CSV Matrix Sum ', async () => {
        const res  = await  chai.request(server)
            .post('/sum')
            .set('content-type', 'multipart/form-data')
            .attach('file', csvfilepath,'matrix.csv')
        console.log("CSV Matrix Sum Result","\n", res.text);
        expect(res.status).to.equal(200);
        expect(res.text).to.be.a("string");
        expect(res.text).to.be.eq("45");

    });

});

/**
 * Test CSV matrix multiply endpoint with the matrix.csv file in the test directory
 */
describe('CSV Matrix Multiply', () => {
    it('Get CSV Matrix Multiply ', async () => {
        const res  = await  chai.request(server)
            .post('/multiply')
            .set('content-type', 'multipart/form-data')
            .attach('file',csvfilepath ,'matrix.csv')
        console.log("CSV Matrix Multiply Result","\n", res.text);
        expect(res.status).to.equal(200);
        expect(res.text).to.be.a("string");
        expect(res.text).to.be.eq("362880");

    });



});