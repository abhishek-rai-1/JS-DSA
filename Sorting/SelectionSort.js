function findMinIndex(arr, index, n) {
  for (let j = index + 1; j < n; j++) {
    if (arr[j] < arr[index]) index = j;
  }
  return index;
}

function selectionSort(arr, n) {
  for (let i = 0; i < n; i++) {
    let minIndex = findMinIndex(arr, i, n);
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

let arr = [4, 2, 6, 5, 1, 3];
const res = selectionSort(arr, arr.length);
console.log(res);