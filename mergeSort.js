'use strict';

function mergeSortedArrs(arr1, arr2) {
  const mergedArr = [];
  let arr1Index = 0;
  let arr2Index = 0;

  while (arr1Index < arr1.length && arr2Index < arr2.length) {
    if (arr1[arr1Index] < arr2[arr2Index]) {
      mergedArr.push(arr1[arr1Index]);
      arr1Index++;
    } else {
      mergedArr.push(arr2[arr2Index]);
      arr2Index++;
    }
  }
  arr1Index === arr1.length
    ? mergedArr.push(...arr2.slice(arr2Index))
    : mergedArr.push(...arr1.slice(arr1Index));

  return mergedArr;
}

function mergeSort(arr) {
  const copyArr = [...arr];

  if (copyArr.length === 0) return [];
  if (copyArr.length === 1) return copyArr;

  const leftHalf = copyArr.slice(0, copyArr.length / 2);
  const rightHalf = copyArr.slice(copyArr.length / 2);

  return mergeSortedArrs(mergeSort(leftHalf), mergeSort(rightHalf));
}
