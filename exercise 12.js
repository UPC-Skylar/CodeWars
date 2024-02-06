//El generador de hashtags
function generateHashtag(str) {
  if (str.length == 0) return false;
  if (str.split("").every((element) => element == " ")) {
    return false;
  }
  if (str[0] == "#") str = str.slice(1);
  str = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
  let final = "#" + str;
  if (final.length > 140 || final.length == 0) return false;
  return final;
}
console.log(generateHashtag("     "));
