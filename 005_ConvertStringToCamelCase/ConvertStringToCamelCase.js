function toCamelCase(str) {

    let myArray = str.split(/-|_|,/)
    let res = '';

    myArray.forEach(element => {
        res += element[0].toUpperCase() + element.slice(1);
        console.log(res)
    });
    console.log(res[0]);
    //console.log(res)
    return res
}

console.log(toCamelCase("erkjelkjr_the_stealth-warrior_llskdj,kdjfslk"))

