function totalSum(numArray) {
    let sum = 0;
    for (const num of numArray) {
        sum += num;
    }
    return sum;
}

function highestNumber(numArray) {
    if (numArray.length === 0) {
        return null;
    }
    let highest = numArray[0];
    for (const num of numArray) {
        if (num > highest) {
            highest = num;
        }
    }
    return highest;
}

function lowestNumber(numArray) {
    if (numArray.length === 0) {
        return null;
    }
    let lowest = numArray[0];
    for (const num of numArray) {
        if (num < lowest) {
            lowest = num;
        }
    }
    return lowest;
}

function average(numArray) {
    if (numArray.length === 0) {
        return null;
    }
    const sum = totalSum(numArray);
    return sum / numArray.length;
}

module.exports = { totalSum, highestNumber, lowestNumber, average };