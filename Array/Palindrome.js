checkPalindrome = (str) => str.split("").reverse().join("") === str;

const st = "cddc";

const ans = checkPalindrome(st);

console.log(ans)
