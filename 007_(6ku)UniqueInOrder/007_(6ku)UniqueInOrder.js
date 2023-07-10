var uniqueInOrder = function (iterable) {
	//your code here - remember iterable can be a string or an array
	var uniq = []

	const myArray = iterable.toString().replace(/[\s.,%]/g, '').split('')
	console.log(myArray)
	for (let index = 0; index < myArray.length; index++) {
		const element = myArray[index];
		if (element !== myArray[index + 1] && index !== myArray.length) {
			if (isNaN(parseInt(element))) { uniq.push(element) }
			if (!isNaN(parseInt(element))) { uniq.push(parseInt(element)) }
		}
	}

	return uniq
}
let res = document.querySelector("#result")
res.innerHTML = uniqueInOrder('444445555fffffRRRRReeee4443333355533333444eeeeeTTTT44322')


