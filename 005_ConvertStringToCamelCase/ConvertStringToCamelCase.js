function toCamelCase(str) {

    let myArray = str.split(/-|_|,/)
    return myArray.forEach(element => {
        //console.log(...element[0], element[0].toUpperCase());
        if (element[0].toLowerCase() == element[0]) { element[0] = element[0].toUpperCase() }

    });
}

console.log(toCamelCase("The_stealth-warrior_llskdj,kdjfslk"))

