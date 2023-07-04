function getSum(a, b)
{   
    let interval = 0;
    let beginNumber = 0;
    if (a>b){interval = a - b; beginNumber = b;}         
    if (a<b){interval = b - a; beginNumber = a;}   
    if (a == b) {return a;}

    console.log("interval = ", interval)
    let result = 0; 
    for (let index = 0; index <= interval; index++) {
        result += beginNumber + index;
        console.log("result = ", result, "  index = ", index)
    }
    return result;
}

console.log(getSum(2,2))
