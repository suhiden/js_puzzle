function cipher(leterOne, leterTwo) {
    arrayMatrix = [
        ['P', 'L', 'A', 'Y', 'F'],
        ['I', 'R', 'E', 'X', 'M'],
        ['B', 'C', 'D', 'G', 'H'],
        ['K', 'N', 'O', 'Q', 'S'],
        ['T', 'U', 'V', 'W', 'Z']];
    let positionleter = []; //объявим масив для результатов

    if (leterOne.toUpperCase() == 'J') leterOne = 'I';
    if (leterTwo.toUpperCase() == 'J') leterTwo = 'I';

    //================ проверяем позицию букв и заносим их в масив.

    for (let j = 0; j < arrayMatrix.length; j++) { //проходим по строкам 

        for (let i = 0; i < arrayMatrix[j].length; i++) {   //проходим по столбцам
            //console.log(arrayMatrix[j][i]);
            if (arrayMatrix[j][i] == leterOne) {
                positionleter[0] = [j, i];
                //console.log(j, i);
            }
            if (arrayMatrix[j][i] == leterTwo) {
                positionleter[1] = [j, i];
                //console.log(j, i);
            }
        }
    }
    // ================== Позиция определена теперь нужно определить какой механизм шифрования будем использовать.

    if (positionleter[0][0] == positionleter[1][0]) {
        //console.log(leterOne, leterTwo, 'строки равны - первая буква ', positionleter[0], '  вторая буква ', positionleter[1])
        if (positionleter[0][1] == 4) { positionleter[0][1] = 0 }   //сдвигаем первую букву по строке. 
        else { positionleter[0][1] = positionleter[0][1] + 1 }     //

        if (positionleter[1][1] == 4) { positionleter[1][1] = 0 }   //сдвигаем вторую букву по строке. 
        else { positionleter[1][1] = positionleter[1][1] + 1 }     //
        //console.log('после шифрования - первая буква ', positionleter[0], '  вторая буква ', positionleter[1])
    }
    if (positionleter[0][1] == positionleter[1][1]) {

        //console.log(leterOne, leterTwo, 'столбцы равны - первая буква ', positionleter[0], '  вторая буква ', positionleter[1])
        if (positionleter[0][0] == 4) { positionleter[0][0] = 0 }   //сдвигаем первую букву по столбцу 
        else { positionleter[0][0] = positionleter[0][0] + 1 }     //

        if (positionleter[1][0] == 4) { positionleter[1][0] = 0 }   //сдвигаем вторую букву по столбцу 
        else { positionleter[1][0] = positionleter[1][0] + 1 }     //

        //console.log('после шифрования - первая буква ', positionleter[0], '  вторая буква ', positionleter[1])
    }

    if (positionleter[0][0] != positionleter[1][0]
        && positionleter[0][1] != positionleter[1][1]) {
        //console.log(leterOne, leterTwo, 'столбцы и строки разные', positionleter[0], '  вторая буква ', positionleter[1])
        let temp = positionleter[0][1]
        positionleter[0][1] = positionleter[1][1]
        positionleter[1][1] = temp;

        //console.log('после шифрования - первая буква ', positionleter[0], '  вторая буква ', positionleter[1])
    }
    // из позиции нужно перевести в буквы.
    let ciperOne
    let ciperTwo
    for (let j = 0; j < arrayMatrix.length; j++) { //проходим по строкам 

        for (let i = 0; i < arrayMatrix[j].length; i++) {   //проходим по столбцам
            //console.log(arrayMatrix[j][i]);
            if (j == positionleter[0][0] && i == positionleter[0][1]) {
                ciperOne = arrayMatrix[j][i];
                //console.log(j, i);
            }
            if (j == positionleter[1][0] && i == positionleter[1][1]) {
                ciperTwo = arrayMatrix[j][i];
                //console.log(ci);
            }
        }
    }

    //console.log('==========================')
    return ciperOne + ciperTwo;

}

function strPrepare(str, key1) {
    key = key1 //'X'
    let strArray = str.toUpperCase().split(' ')
    let lengthStr = []                              //определяем длину каждого слова и записываем это как массив
    strArray.forEach(element => {
        lengthStr.push(element.length) // определяем длину исходного предложения.
    });

    strArray = str.replaceAll(' ', '').toUpperCase().split('')

    let strResult = []
    let lastElement

    strArray.forEach(element => {
        if (element == lastElement) {
            strResult.push(key.toUpperCase())
            strResult.push(element)
        } else {
            strResult.push(element)
        }

        lastElement = element
    });
    if (strResult.length % 2 != 0) { strResult.push(key.toUpperCase()) }


    //console.log(strResult);
    // обрабатываем масив и передаем по 2 буквы в функцию шифрования.
    let secretMessage = ''
    for (let index = 0; index < strResult.length; index = index + 2) {
        //console.log(String(strResult[index]), String(strResult[index + 1]))
        secretMessage = secretMessage + cipher(strResult[index], strResult[index + 1])
    }

    let secretMessageOut = ''; //разбиваем сообщение по длине исходных слов. 
    let startPos = 0;
    for (i of lengthStr) {
        //console.log(i)
        secretMessageOut = secretMessageOut + secretMessage.slice(startPos, startPos + i) + ' '
        startPos = startPos + i
    }

    secretMessageOut = secretMessageOut.trim() + secretMessage.slice(startPos) // добавляем отрезок шифрованного сообщения. 


    //console.log(secretMessage.length,);
    //console.log(lengthStr);


    return secretMessageOut;
}


// console.log(cipher('C', 'O'))
// console.log(cipher('Z', 'Y'))
// console.log(cipher('L', 'U'))
// console.log(cipher('M', 'X'))
// console.log(cipher('M', 'O'))
// console.log(cipher('X', 'G'))
// console.log(cipher('I', 'V')) // нужно решить вопрос с заменой J I
// console.log(cipher('E', 'S'))
// console.log(cipher('X', 'S'))
// console.log(cipher('M', 'A'))
console.log(strPrepare('cozy lummox gives smart squid who asks for job pen', 'X'))
console.log(strPrepare('Jackdaws love my big sphinx of quartz', 'x'))
console.log(strPrepare('Pack my box with five dozen liquor jugs', 'X'))
console.log(strPrepare('The quick onyx goblin jumps over the lazy dwarf', 'X'))
console.log(strPrepare('Cwm fjord bank glyphs vext quiz', 'x'))
console.log(strPrepare('How razorback jumping frogs can level six piqued gymnasts', 'X'))
