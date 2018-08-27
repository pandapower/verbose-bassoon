const chai = require('chai');
const mocha = require('mocha');
const api = require('../../app/api/sample_data');

const { describe, it } = mocha;
const { assert } = chai;

describe('get', () => {
  it('should get sample data', () => {
    const expected = {
      header: 'Animals',
      items: [
        'Panda',
        'Tiger',
        'Elephant',
        'Kangaroo',
      ],
    };

    const actual = api.get();

    assert.deepEqual(expected, actual);
  });
});
