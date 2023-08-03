function movingShift(str, shift) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let sCod = '';
    for (let index = 0; index < str.length; index++) {
        let leter = str[index] // начинаем перебор сообщения берем перву букву из сообщения s[index]
        let leterIndex = alphabet.indexOf(leter)// находим эту букву в алфавите и определяем ее индекс. 
        let leterCipher = alphabet[(leterIndex + shift) % 26]

        if (alphabet.indexOf(leter) == -1) { sCod = sCod + leter }
        if (alphabet.indexOf(leter) != -1) { sCod = sCod + leterCipher }

        shift = shift + 1
    }
    return sCod;
}

function demovingShift(arr, shift) {
    return "";
}

const u = "i should have known that you would have a perfect answer for me!!!"
const k = "j vltasl rlhr zdfog odxr ypw atasl rlhr p gwkzzyq zntyhv lvz wp!!!"
let shift = 1
//let chipher = movingShift(u, shift)

console.log(movingShift(u, shift))
//console.log(demovingShift(u, shift))
