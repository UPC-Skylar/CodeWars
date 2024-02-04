function validBraces(braces) {
  //string
  //1. Debemos buscar en el string si existe cualquiera de los validos
  //2. Si existe, debemos quitarlo del string
  //3. Si el string se queda vacio entonces es true
  if (braces.includes("()") || braces.includes("{}") || braces.includes("[]")) {
    while (braces.length > 0) {
      braces.replace(/\(\)|\[\]|\{\}/g, "");
    }
  }
  return false;
}
console.log(validBraces("[({})](]"));
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False
