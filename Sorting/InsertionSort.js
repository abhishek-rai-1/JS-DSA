function insertionSort(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j] < arr[j - 1]) [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }
  return arr;
}

let arr = [4, 2, 6, 5, 1, 3];
const res = insertionSort(arr, arr.length);
console.log(res);