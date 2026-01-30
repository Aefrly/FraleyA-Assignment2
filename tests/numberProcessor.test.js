const { totalSum, highestNumber, lowestNumber, average } = require('../src/numberProcessor.js');

test('should find total sum of numbers', () => {
    const result = totalSum([1, 2, 3, 4, 5]);
    expect(result).toBe(15);
});

test('should find highest number', () => {
    const result = highestNumber([1, 2, 3, 4, 5]);
    expect(result).toBe(5);
});

test('should find lowest number', () => {
    const result = lowestNumber([1, 2, 3, 4, 5]);
    expect(result).toBe(1);
}); 

test('should find average of numbers', () => {
    const result = average([1, 2, 3, 4, 5]);
    expect(result).toBe(3);
});