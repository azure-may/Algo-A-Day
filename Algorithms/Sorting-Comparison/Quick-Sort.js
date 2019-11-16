// Quick sort accepts an array and returns sorted
// Best case time complexity O(N log N) worst case O(N^2), space O(N)
// This version starts with first index
// To avoid mutation use the spread operator
function swap(array, left, right){
  [array[left], array[right]]=[array[right], array[left]];
  return array;
}

function pivot(array, start=0, end=array.length){
  let pivot = start;
  for(let i=start+1; i<end; i++){
      if(array[i]<array[start]){
          pivot++;
          swap(array, i, pivot);
      }
  }
  if(pivot){
      swap(array, start, pivot);
  }
  return pivot;
}

function quickSort(array, left=0, right=array.length){
  if(left<right){
     let pivotInd = pivot(array, left, right);
     quickSort(array, left, pivotInd);
     quickSort(array, pivotInd+1, right); 
  }
  return array;
}