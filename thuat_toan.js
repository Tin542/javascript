// let array = [10, 15, 1, 2, 5, 12, 5, 7];

/**Thuật toán Bubble sort */
// function usingBubbleSort(arr) {
//   for (let i = 0; i <= arr.length - 1; i++) {
//     for (let j = 0; j <= arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// console.log(usingBubbleSort(array));

/**Thuật toán Selection sort */
// function usingSelectionSort(arr) {
//   for (let i = 0; i <= arr.length - 1; i++) {
//     let min_idx = i;
//     for (let j = i + 1; j <= arr.length - 1; j++) {
//       if (arr[j] < arr[min_idx]) {
//         min_idx = j;
//       }
//     }
//     let tmp = arr[min_idx];
//     arr[min_idx] = arr[i];
//     arr[i] = tmp;
//   }
//   return arr;
// }

// console.log(usingSelectionSort(array));

/**Thuật toán Insertion sort */
// function usingInsertionSort(arr) {
//   for (let i = 1; i <= arr.length - 1; i++) {
//     let key = arr[i];
//     let j = i - 1; //0

//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j = j - 1;
//     }
//     arr[j + 1] = key;
//   }
//   return arr;
// }

// console.log(usingInsertionSort(array));

/**Thuật toán Quick sort */
let arr2 = [2, 5, 8, 6, 4, 7, 9, 1, 3];

function swap(mang, a, b) {
  let tmp = mang[a];
  mang[a] = mang[b];
  mang[b] = tmp;
  // return mang;
}
function partition(arr, low, hight) {
  let pivot = arr[hight]; //Đặt pivot là phần tử cuối
  let i = low - 1;
  // console.log(`pivot: ${pivot}, i: ${i}`);
  for (let j = low; j <= hight; j++) {
    if (arr[j] <= pivot) {
      i += 1;
      //swap arr[j] với arr[i]
      swap(arr, i, j);
    }
  }
  return i;
}

function usingQuickSort(arr, low, hight) {
  if (low < hight) {
    let pi = partition(arr, low, hight);
    usingQuickSort(arr, low, pi - 1);
    usingQuickSort(arr, pi + 1, hight);
  }
  return arr;
}
// console.log(usingQuickSort(arr2, 0, arr2.length - 1));

let array = [10, 15, 1, 2, 5, 12, 5, 7];
/**Thuật toán Merge sort */
function merge(left, right) {
  let resultArr = [], leftIndex = rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArr.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return resultArr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function usingMergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(usingMergeSort(left), usingMergeSort(right));
}

// console.log(usingMergeSort(array));

/**Thuật toán Heap sort */
function usingHeapSort(array) {
  //Chuyển map heap thành max heap lần đầu tiên
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    convertToMaxHeap(array, i, array.length);
  }

  /**Sau khi đã có max heap đầu tiên ==> swap root cho element cuối cùng */
  for (let i = array.length - 1; i > 0; i--) {
    swap(array, i, 0);

    /**Xây dựng lại max heap */
    convertToMaxHeap(array, 0, i);
  }

  return array;
}

function convertToMaxHeap(array, indexParentNode, heapSize) {
  let parentNode = indexParentNode;
  let leftChildNode = indexParentNode * 2 + 1;
  let rightChildNode = indexParentNode * 2 + 2;

  /**So sánh child node trái với parent node */
  if (leftChildNode < heapSize && array[leftChildNode] > array[parentNode]) {
    parentNode = leftChildNode;
  }

  /**So sánh child node trái với parent node */
  if (rightChildNode < heapSize && array[rightChildNode] > array[parentNode]) {
    parentNode = rightChildNode;
  }

  /**So sánh parent node nếu thay đổi so với giá trị ban đầu =>  swap */
  if (parentNode !== indexParentNode) {
    swap(array, indexParentNode, parentNode);
    convertToMaxHeap(array, parentNode, heapSize);
  }
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
}

// console.log(usingHeapSort(array));

/**Thuật toán binary search */
function usingBinarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (target > array[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// console.log(usingBinarySearch(array, 1));