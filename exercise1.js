function squareDigits(num) {
  //Volvemos el entero en string y lo guardamos digito a digito en un array
  let separateInteger = String(num).split("");
  //A cada elemento del array lo elevaremos al cuadrado
  let separateIntegerElevateSquare = separateInteger.map((element) =>
    Math.pow(parseInt(element), 2)
  );
  return separateIntegerElevateSquare.join("") * 1; //Devolvemos en forma de entero
}
