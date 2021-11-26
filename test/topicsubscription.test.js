"use strict";
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
const { expect } = chai;
chai.use(chaiHttp);


/**
 * Test Topic Subscription
 */
describe('Subscribe Topic 1', () => {
    it('Subscribe Topic 1 ', async () => {
        const res  = await  chai.request(server)
            .post('/subscribe/topic1')
            .set('content-type', 'application/json')
            .send({url: 'http://localhost:8000/test1'})
            console.log("Subscribe Topic 1 Result","\n", res.text);
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an("object");
             expect(res.body).to.be.eql({ url: 'http://localhost:8000/test1', topic: 'topic1' });


    });

  

  });

/**
 * Test Topic Subscription
 */
describe('Subscribe Topic 2', () => {
    it('Subscribe Topic 2 ', async () => {
        const res  = await  chai.request(server)
            .post('/subscribe/topic1')
            .set('content-type', 'application/json')
            .send({url: 'http://localhost:8000/test2'})
        console.log("Subscribe Topic 1 Result","\n", res.text);
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.be.eql({ url: 'http://localhost:8000/test2', topic: 'topic1' });


    });



});


/**
 * Test Public Topic to Subscribers
 */
describe('Publish Topic to Subscribers ', () => {
    it('Publish Topic to Subscribers ', async () => {
        const res  = await  chai.request(server)
            .post('/publish/topic1')
            .set('content-type', 'application/json')
            .send({message: 'hello world'})
        console.log("Publish Topic to Subscribers Result","\n", res.text);
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("object");
         expect(res.body).to.be.eql({
             status: "success",
             data: "Message has been pushed to subscribers"
         } );


    });



});