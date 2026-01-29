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