//Vowel Count
function getCount(str) {
  let vocales = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    vocales.forEach((element) => {
      if (element == str[i]) count++;
    });
  }
  return count;
}

console.log(getCount(""));
