// function ReverseString(str) {
//   const StringArr = str.split("");
//   let end = StringArr.length - 1;
//   let temp;

//   for (let start = 0; start < end; start++) {
//     temp = StringArr[start];
//     StringArr[start] = StringArr[end];
//     StringArr[end] = temp;
//     end--;
//   }

//   return StringArr.join("");
// }

ReverseString = (str) => str.split("").reverse().join("");

const ans = ReverseString("hello");
console.log(ans);
