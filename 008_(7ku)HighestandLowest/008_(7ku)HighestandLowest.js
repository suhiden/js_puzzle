function highAndLow(str) {
    let res = []
    let mas = str.split(' ')
    mas.forEach(element => { res.push(Number(element)) });

    return Math.max.apply(mas) //+ ' ' + Math.min.apply(mas))
}

console.log(highAndLow("12 9 3 4 -5"));
