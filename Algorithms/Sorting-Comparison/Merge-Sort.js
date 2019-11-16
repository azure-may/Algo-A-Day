// Merge sort time O(N log N) space O(N)
// first declare merge helper function which accepts two sorted arrays
function merge(arr1, arr2){
  let left = 0;
  let right = 0;
  let merged = []
  while (left<arr1.length && right<arr2.length){
      if (arr1[left]<=arr2[right]) {
          merged.push(arr1[left]);
          left++;
      } 
      else {
          merged.push(arr2[right]);
          right++;
      }
  }
  while (left<arr1.length){
      merged.push(arr1[left]);
      left++;
  }
  while (right<arr2.length){
      merged.push(arr2[right]);
      right++;
  }
  return merged;
}

function mergSort(array){
  if (array.length<=1) return array; //base case
  let mid = Math.floor((array.length)/2);
  let left = mergSort(array.slice(0,mid));
  let right = mergSort(array.slice(mid));
  return merge(left, right);
}