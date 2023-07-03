function multiplayNumber3or5 (number) {
    if (number < 0) {
        return 0;
    }
    let result = 0;
    try {
        for (let index = 0; index < number; index++){
                if ((index % 3 == 0) || (index % 5 == 0)) 
                {
                result = result + index;
                console.log(index, "  =   ", result)
                }          
            }
        } 
        // постараемся поймать ошибку и вывести ее в консоль!!! ++++
    catch (error) {
        console.log('возникла ошибка = ', error)
    }
    
    return result;
}
console.log(multiplayNumber3or5(3444));

