
function islands(array:string[][]){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            let item = array[i][j]
            console.log(item);
        }

    }
    return(array);
}

let matrix = [["1","1","0","1","1"],
    ["1","1","0","1","1"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"],
    ["0","1","1","0","0"]];

console.log(islands(matrix));