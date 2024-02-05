//Valid Braces
function validBraces(braces) {
  //string
  //1. Debemos buscar en el string si existe cualquiera de los validos
  //2. Si existe, debemos quitarlo del string
  //3. Si el string se queda vacio entonces es true
  while (
    braces.includes("()") ||
    braces.includes("{}") ||
    braces.includes("[]")
  ) {
    braces = braces.replace(/\(\)|\[\]|\{\}/g, "");
  }
  return braces.length == 0;
}
console.log(validBraces("[(])"));
