function domainName(url) {
    //your code here
    const arrayUrlProperty = ['', '', 'http', 'https', 'www'];
    let urlTemp = url.split(/[:/.]/)
    console.log(urlTemp)

    for (let index = 0; index < arrayUrlProperty.length; index++) {
        for (let j = 0; j < urlTemp.length; j++)
        //console.log(j, urlTemp[j])
        {
            //console.log(index, arrayUrlProperty[j])
            if (urlTemp[j] == arrayUrlProperty[index]) urlTemp.splice(j, 1)
            console.log(urlTemp)
        }

    }
    return urlTemp[0];
}
console.log(domainName("http://github.com/carbonfive/raygun"));

console.log(domainName("https://www.cnet.com"))

// // отличное решение
// function domainName(url) {
//     return url.replace('http://', '')
//         .replace('https://', '')
//         .replace('www.', '')
//         .split('.')[0];
// }

// function domainName(url){
//     url = url.replace("https://", '');
//     url = url.replace("http://", '');
//     url = url.replace("www.", '');
//     return url.split('.')[0];
//   };