function narcissistic(value) {
    // Code me to return true or false
    const masValue = Array.from(String(value), Number)
    let result = 0;
    masValue.forEach(element => {
        result += element ** masValue.length
        console.log(result)
    });
    return value == result;
}
console.log(narcissistic(153))
console.log(narcissistic(1384))
console.log(narcissistic(12345))  
