//Does my number look big in this?
function narcissistic(value) {
  let cantidadCaracteres = String(value).length;
  let elevarALaTercia = String(value)
    .split("")
    .map((element) => Math.pow(element, cantidadCaracteres));
  let final = elevarALaTercia.reduce((a, b) => a + b);
  return value == final;
  // Code me to return true or false
}

console.log(narcissistic(1652));
