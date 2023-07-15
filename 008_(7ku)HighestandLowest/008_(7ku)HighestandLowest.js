function highAndLow(str) {
    let res = []
    let mas = str.split(' ')
    mas.forEach(element => { res.push(Number(element)) });
    return String(Math.max.apply(null, res) + ' ' + Math.min.apply(null, res))

}

console.log(highAndLow("12 9 3 4 -7"));

//это решение более элегантное оно было в решениях более популярное. 
function highAndLow2(numbers) {
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}