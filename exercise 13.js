function moveZeros(arr) {
  let arr1 = [];
  let arr2 = [];
  arr.forEach((element) => {
    if (element == 0) {
      arr2.push(element);
    } else {
      arr1.push(element);
    }
  });
  return arr1.concat(arr2);
}
