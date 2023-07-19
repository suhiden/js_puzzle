function toCamelCase(str) {

    let myArray = str.split(/-|_|,/)
    let res = '';

    myArray.forEach(element => {
        res += element[0].toUpperCase() + element.slice(1);
        console.log(res)
    });

    return str[0] + res.slice(1)
}

console.log(toCamelCase("Erkjelkjr_the_stealth-warrior_llskdj,kdjfslk"))

