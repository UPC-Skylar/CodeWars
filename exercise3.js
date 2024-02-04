//Ejercicio 3
function rowSumOddNumbers(n) {
  let firstElement = n * (n - 1) + 1;
  let arr = [firstElement];
  for (let i = 1; i < n; i++) {
    arr.push(firstElement + 2 * i);
  }
  return arr.reduce((a, b) => a + b);
}

console.log(rowSumOddNumbers(4));
