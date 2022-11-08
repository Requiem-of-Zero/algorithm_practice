var isValid = function (s) {
  let stack = [];
  const validParens = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    let currBracket = s[i];
    if (validParens[currBracket]) {
      stack.push(currBracket);
    } else if (validParens[stack.pop()] !== currBracket) {
      return false;
    }
  }
  return stack.length === 0;
};

