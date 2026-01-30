const { countWords, longestWord, countLines } = require('../src/textAnalyzer.js');

test('should count words in simple text', () => {
    const result = countWords('Hello world test');
    expect(result).toBe(3);
});

test('should return longest word in simple text', () => {
    const result = longestWord('Hello world test because');
    expect(result).toBe('because');
});

test('should count lines in simple text', () => {
    const result = countLines('Hello world\ntest because\nlines');
    expect(result).toBe(3);
});