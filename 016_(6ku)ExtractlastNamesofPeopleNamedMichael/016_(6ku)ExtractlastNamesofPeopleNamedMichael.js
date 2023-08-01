function getMichaelLastName(inputText) {
    // your awesome code here
    let name = inputText.match(/((Michael\s)([A-Z]\w+))/g)
    const fam = [];
    for (let index = 0; index < name.length; index++) {
        fam.push(name[index].split(' ')[1]);
    }
    return fam
}
const text = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";

console.log(getMichaelLastName(text))

function getMichaelLastNameBeter(inputText) {
    // your awesome code here
    return inputText.match(/(?<=Michael\s)[A-Z]\w+/g)
}
console.log(getMichaelLastNameBeter(text))