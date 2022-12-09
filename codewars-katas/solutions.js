// * Tribonnacci Sequence
function tribonacci(signature, n) {
  //your code here
  if (signature.length === 0) return [];
  if (n === 1) return [signature[0]];
  if (n === 2) return [signature[0], signature[1]];
  if (n === 3) return signature;
  let [first, second, third] = [
    signature[signature.length - 3],
    signature[signature.length - 2],
    signature[signature.length - 1],
  ];
  const num = first + second + third;

  signature.push(num);

  return tribonacci(signature, n - 1);
}

// * Playing With Digits
function digPow(n, p) {
  // ...
  const strNum = "" + n;
  let sum = 0;

  for (let i = 0; i < strNum.length; i++) {
    let power = p + i,
      currNum = +strNum[i];
    sum += currNum ** power;
  }

  if (!isFloat(sum / n)) {
    return sum / n;
  } else {
    return -1;
  }
}

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}

