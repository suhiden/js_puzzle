function descendingOrder(number) 
{
  const numberArray = [...''+number].map(Number)
  numberArray.sort((a, b) => b - a);
  return numberArray.join('')
}

console.log(descendingOrder(3434524))