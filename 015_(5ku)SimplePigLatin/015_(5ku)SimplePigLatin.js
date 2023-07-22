function pigIt(str) {
    //Code here
    let strTemp = str.split(' ')
    strResult = ''
    for (i in strTemp) {
        //         console.log(strTemp[i])
        if (strTemp[i] != '!' && strTemp[i] != '?') {
            strTemp[i] = strTemp[i].slice(1) + strTemp[i][0] + 'ay ';
        }
        strResult += strTemp[i]
    }
    return strResult.trim();
}

console.log(pigIt('Pig latin is cool'));
console.log(pigIt('Hello world !'))

function pigIt1(str) {
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

console.log(pigIt1('Pig latin is cool'));
console.log(pigIt1('Hello world !'))