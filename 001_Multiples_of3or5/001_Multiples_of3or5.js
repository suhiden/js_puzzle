function multiplayNumber3or5(number) {
    if (number < 0) {
        return 0;
    }
    let result = 0;
    for (let i = 0; i < number; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)) { result = result + i; }
    }

    return result;
}
console.log(multiplayNumber3or5(10));

