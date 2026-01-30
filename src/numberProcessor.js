function totalSum(numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}

function highestNumber(numbers) {
    if (numbers.length === 0) {
        return null;
    }
    let highest = numbers[0];
    for (const num of numbers) {
        if (num > highest) {
            highest = num;
        }
    }
    return highest;
}

function lowestNumber(numbers) {
    if (numbers.length === 0) {
        return null;
    }
    let lowest = numbers[0];
    for (const num of numbers) {
        if (num < lowest) {
            lowest = num;
        }
    }
    return lowest;
}

function average(numbers) {
    if (numbers.length === 0) {
        return null;
    }
    const sum = totalSum(numbers);
    return sum / numbers.length;
}

module.exports = { totalSum, highestNumber, lowestNumber, average };

const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../data/sample-numbers.txt'),'utf-8');

const numbers = content.trim().split('\n').map(Number);

console.log(totalSum(numbers));
console.log(highestNumber(numbers));
console.log(lowestNumber(numbers));
console.log(average(numbers));