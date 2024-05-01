
function islands(array:string[][]){
    let islands = [['9','9']];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            let item = array[i][j]
            console.log(item);
            let coordinate = `${i}${j}`
            console.log(coordinate);
            if (item === "1"){
                for (let k = 0; k < islands.length; k++) {
                    if (!islands[k].includes(coordinate)){
                        console.log("есть такая координата = ",k)
                    };

                }
            }
            /*если мы нашли еденицу
            проверяем есть ли эти координаты в массиве островов если нигде нет то добавляем в массив новый остров.
            если координаты соседних островов если нет тогда добавляем и соседей

            Считаем количество массивов.
            */
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