function words(word) {
    let oneStrPart = word.split(/\d*$/gm).join('')
    // console.log(oneStrPart)
    let numStr = word.match(/\d*$/gm)
    console.log('numstr = ', numStr)
    let num = String(Number(numStr[0]) + 1);
    let numStrlen = numStr[0].length;
    //console.log(oneStrPart, numStr, num, numStrlen)
    if (String(num[0]).length > numStr[0].length) numStrlen = String(num).length

    return oneStrPart + num.padStart(numStrlen, '0')
}
console.log(words("fsdfs34ferwer9999"))