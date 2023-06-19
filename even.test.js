
const { expect } = require('chai');
const isEven = require('./even');

describe('isEven', () => {
  it('should return true for an even number', () => {
    const result = isEven(4);
    expect(result).to.be.true;
  });

  it('should return false for an odd number', () => {
    const result = isEven(7);
    expect(result).to.be.false;
  });

  it('should return true for 0', () => {
    const result = isEven(0);
    expect(result).to.be.true;
  });
});
