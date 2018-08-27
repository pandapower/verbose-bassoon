const chai = require('chai');
const mocha = require('mocha');
const request = require('supertest');
const app = require('../../app');

const { describe, it } = mocha;
const { assert } = chai;

describe('GET Route: /', () => {
  it('/ should 200', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end((error, response) => {
        if (error) {
          throw error;
        }

        assert.equal(response.charset, 'utf-8');
        done();
      });
  });

  it('/error should 404', (done) => {
    request(app)
      .get('/error')
      .expect(404)
      .end((error) => {
        if (error) {
          throw error;
        }

        done();
      });
  });
});
