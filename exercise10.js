// [7] debería devolver 7, porque aparece 1 vez (que es impar).
// [0] debería devolver 0, porque aparece 1 vez (que es impar).
// [1,1,2] debería devolver 2, porque aparece 1 vez (lo cual es impar).
// [0,1,0,1,0] debería devolver 0, porque ocurre 3 veces (lo cual es impar).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] debería devolver 4, porque aparece 1 vez (lo cual es impar).
function findOdd(A) {
  //1. Debo contar todos los numeros que hay en un array
  for (let i = 0; i < A.length; i++) {
    let arr = A.filter((element) => element == A[i]);
    if (arr.length % 2 != 0) return A[i];
  }
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
