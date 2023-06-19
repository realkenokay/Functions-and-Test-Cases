const { expect } = require('chai');
const getMax = require('./max');

describe('getMax', () => {
    it('should return the maximum value from an array of numbers', () => {
        const result = getMax([3, 7, 2, 9, 5]);
        expect(result).to.equal(9);
    });

    it('should return undefined for an empty array', () => {
        const result = getMax([]);
        expect(result).to.be.undefined;
    });

    it('should return the only element for an array with a single element', () => {
        const result = getMax([42]);
        expect(result).to.equal(42);
    });
});
