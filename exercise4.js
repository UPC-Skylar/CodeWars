function toCamelCase(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "-" || str[i] == "_") {
      result.push(str[i + 1].toUpperCase());
      i++;
    } else {
      result.push(str[i]);
    }
  }
  return result.join("");
}
console.log(toCamelCase("the-stealth-warrior"));
