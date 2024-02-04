// PLAYING WITH DIGITS
function playingWithDigits(n, p) {
  let arr = String(n)
    .split("")
    .map((element, index) => Math.pow(element, p + index));
  let result = arr.reduce((a, b) => a + b);
  let k = result / n;
  return k == Math.round(k) ? k : -1;
}

console.log(playingWithDigits(46288, 3));
//
