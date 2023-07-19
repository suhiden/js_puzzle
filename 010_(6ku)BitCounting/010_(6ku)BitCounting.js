function numBin(n) {
    result = []
    let i = n;
    let count = 0;
    while (i > 0) {
        console.log(i % 2, "   ", i)
        if (i % 2 == 0) { result.push(0) }
        else { result.push(1); count += 1 }
        i = Math.trunc(i / 2);
    }
    console.log(result)
    console.log(Number(result.reverse().join('')));
    return count
};

console.log(numBin(23))