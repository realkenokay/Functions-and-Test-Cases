const { expect } = require('chai');
const isEmpty = require('./isEmpty');

describe('isEmpty', () => {
  it('should return true for an empty string', () => {
    const result = isEmpty('');
    expect(result).to.be.true;
  });

  it('should return false for a non-empty string', () => {
    const result = isEmpty('Hello, world!');
    expect(result).to.be.false;
  });

  it('should return true for a string with only spaces', () => {
    const result = isEmpty('     ');
    expect(result).to.be.true;
  });
});
