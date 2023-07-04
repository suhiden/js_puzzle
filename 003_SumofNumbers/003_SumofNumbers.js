function getSum(a, b)
{
    let interval = a - b;
    if (interval === 0 ) {
        return a;
    }
    let result = 0; 
    for (let index = 0; index <= interval; index++) {
        console.log("result = ", result, "  index = ", index)
        result += index 
        
    }
    return result;
}

console.log(getSum(3,5))
