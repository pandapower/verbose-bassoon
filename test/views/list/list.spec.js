const chai = require('chai');
const mocha = require('mocha');
const cheerio = require('cheerio');
const request = require('supertest');
const app = require('../../../app');

const { describe, it } = mocha;
const { assert } = chai;

describe('Test Page', () => {
  it('Integration Test', (done) => {
    request(app)
      .get('/')
      .end((error, response) => {
        if (error) {
          throw error;
        }

        const $ = cheerio.load(response.text);
        const headline = $('body h1');
        const items = $('body section');

        assert.equal(headline.text(), 'Animals');
        assert.equal(items.length, 4);

        const expected = ['Panda', 'Tiger', 'Elephant', 'Kangaroo'];

        expected.forEach((expectedItem, index) => {
          assert.equal(items.get(index).children[0].data.trim(), expectedItem);
        });

        done();
      });
  });
});
