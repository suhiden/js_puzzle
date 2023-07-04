function toCamelCase(str)
{
    const myArray = str.split('-')
    //console.log(myArray[0].toCamelCase())
    for (let index = 0; index < myArray.length; index++) {
        console.log(myArray[index].toCamelCase);
        
    }
}

console.log(toCamelCase("the-stealth-warrior"))