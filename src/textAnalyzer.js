function countWords(text) {
    if (!text || text.trim() === '') {
        return 0;
    }
    return text.trim().split(' ').length;
}

function longestWord(text) {
    if (!text || text.trim() === '') {
        return '';
    }
    const words = text.trim().split(' ');
    let longest = ' ';
    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

function countLines (text) {
    if (!text) {
        return 0;
    }
    return text.split('\n').length;
}

module.exports = { countWords, longestWord, countLines };

const fs = require('fs');
const path = require('path');
const { countWords, longestWord, countLines } = require('./textAnalyzer');

const content1 = fs.readFileSync(
    path.join(__dirname, '../data/quotes.txt'),
    'utf-8'
);

const content2 = fs.readFileSync(
    path.join(__dirname, '../data/sample-text.txt'),
    'utf-8'
);

console.log(countWords(content1));
console.log(countWords(content2));

console.log(longestWord(content1));
console.log(longestWord(content2));

console.log(countLines(content1));
console.log(countLines(content2));