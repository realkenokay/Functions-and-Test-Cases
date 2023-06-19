function getMax(numbers) {
    if (numbers.length === 0) {
        return undefined;
    }


    const max = Math.max(...numbers);
    return max;
}

module.exports = getMax;
