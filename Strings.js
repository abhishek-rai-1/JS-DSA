// Reverse the string

const reverse = (str) => str.split("").reverse().join("");

console.log(reverse("abhishek"));

// palindrome
const palindrome = (str) => str.split("").reverse().join("") === str;

// console.log(palindrome("raaru"));
// console.log(palindrome("rar"));

// reverse integer
const reverseInteger = (n) =>
  parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);

// console.log(reverseInteger(-1234));

// Sentence Capitalize
const capitalize = (str) =>
  str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(" ");

// console.log(capitalize("hello world"));

// FizzBuzz Proble
const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
};

fizzBuzz(15)
