function ReverseString(str) {
  let stack = [];

  for (let character of str) stack.push(character);

  let reversed = "";

  while (stack.length > 0) reversed += stack.pop();

  return reversed;
}

console.log(ReverseString("hello world"));
