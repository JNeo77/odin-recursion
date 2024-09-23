function fibs(n) {
  const fibArray = [0, 1];
  for (let i = 2; i < n; i++) {
    fibArray.push(fibArray[i-1] + fibArray[i-2]);
  }
  return fibArray;
}

function fibsRec(n) {
  if (n < 2) {
    return [0];
  }

  if (n < 3) {
    return [0, 1];
  }
  
  const fibArray = fibsRec(n-1);
  fibArray.push(fibArray[n-2] + fibArray[n-3]);
  return fibArray;
}