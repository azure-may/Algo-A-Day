//accepts sorted array and value
//returns index or -1
function binarySearch(array, value){
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = array.length-1;
  let mid = left;

  while(left<=right){
    mid = Math.floor((left+right)/2);
    if(array[mid] === value) return mid;
    else if(value < array[mid]) right = mid -1;
    else if(array[mid] < value) left = mid +1;
  }
  return -1;
}