function findEvenIndex(arr) {
    //Code goes here!
    let sumL, sumR
    for (let index = 0; index < arr.length; index++) {
        sumR = 0
        sumL = 0
        for (let l = 0; l < index; l++) {
            sumL = sumL + arr[l]
            // console.log(sumL)
        }
        for (let r = index + 1; r < arr.length; r++) {
            sumR += arr[r]
            // console.log(sumR)
        }
        console.log(index, sumL, sumR)
        if (sumL == sumR) return index

        // const element = arr[index];
        // console.log(arr[index])

    }
    return -1
}

console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]))