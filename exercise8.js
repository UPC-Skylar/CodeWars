function humanReadable(seconds) {
  //21000
  let HH = 0; //5.83 -> 5
  let MM = 0; // 0.83 * 60 -> 49.8
  while (seconds > 59) {
    if (seconds >= 3600) {
      HH = Math.trunc(seconds / 3600);
      seconds -= HH * 3600;
    } else {
      MM = Math.trunc(seconds / 60);
      seconds -= MM * 60;
    }
  }
  let SS = seconds;
  return `${HH >= 10 ? HH : "0" + HH}:${MM >= 10 ? MM : "0" + MM}:${
    SS >= 10 ? SS : "0" + SS
  }`;
}

console.log(humanReadable(4200));
