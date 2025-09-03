module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const brackets = new Map(bracketsConfig);

  for (let i = 0; i < str.length; i += 1) {
    const lastElement = stack[stack.length - 1];

    if (brackets.has(str[i])) {
      if (str[i] === brackets.get(str[i]) && lastElement === str[i]) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    } else if (!stack.length || brackets.get(stack.pop()) !== str[i]) {
      return false;
    }
  }

  return stack.length === 0;
};
