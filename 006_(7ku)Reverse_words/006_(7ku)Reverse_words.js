// function reverseWords(str) {
//     const strArray = str.split(' ');
//     let newStr = '';
//     for (let index = 0; index < strArray.length; index++) {
//         const element = strArray[index];
//         newStr = newStr + element.split('').reverse().join('')
//         console.log(index)
//         if (index - 1 < strArray.length) 
//             {   newStr = newStr + ' ';
//                 console.log("index = ", index);
//             }
    
//         }   
//     return newStr;
//   }


//  elegant designed
  function reverseWords(str) {
    // Go for it
    //split words into seperate arrays
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
  }


  console.log(reverseWords("sihT si na !elpmaxe"))

