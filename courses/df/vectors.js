/*function longStringsOf(a, threshold) {
  return a.filter((x) => x.length >= threshold);
}*/

/*function longStringsOf(a, threshold) {
  const result = [];
  const n = a.length;
  let i = 0;
  while (i < n) {
    if (a[i].length >= threshold) {
      result.push(a[i]);
    }
    i = i + 1;
  }
  return result;
}*/

function longStringsOf(a, threshold) {
  {
    const result = [];
    const n = a;
    for (const x of n)
      if (x < threshold) {
        result.push(x);
      }
  }
  return result;
}

const a = ["shiny", "happy", "people", "with", "vectors"];
console.log(longStringsOf(a, 6));
