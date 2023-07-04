function descendingOrder(number) 
{
  const numberArray = [...''+number].map(Number)
  numberArray.sort((a, b) => b - a);
  return parseInt(numberArray.join(''))
}

console.log(descendingOrder(938475234))