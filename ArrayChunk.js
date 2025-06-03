// const chundedArray = (arr, n) => {
//   let chunk = [];
//   let subchunked = [];
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     subchunked.push(arr[i]);
//     count++;

//     if (count === n) {
//       chunk.push(subchunked);
//       subchunked = [];
//       count = 0;
//     }
//   }

//   if (count !== 0 && count < n) chunk.push(subchunked);

//   return chunk;
// };

const chundedArray = (arr, n) => {
  let index = 0;
  let chunked = [];

  while (index < arr.length) {
    const chunk = arr.slice(index, index + n);
    chunked.push(chunk);
    index += n;
  }

  return chunked;
};

console.log(chundedArray([1, 2, 3, 4, 5, 6, 7, 8], 4));
