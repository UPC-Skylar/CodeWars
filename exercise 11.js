function tribonacci(signature, n) {
  if (n == 0) return [];
  if (n < 4) return signature.splice(0, n);
  let result = [...signature];
  for (let i = 2; i < n - 1; i++) {
    result.push(result[i] + result[i - 1] + result[i - 2]);
  }
  return result;
}

console.log(tribonacci([0, 0, 1], 10));
//Signature contiene como minimo 3 elementos, n > 0 y si n == 0 devolver []
