// Worst case O(N^2) best case O(N)
// Good for online sorting real time
// To prevent data mutation, spread argument into new array. 
function insertionSort(array){
  for (let index=1; index<array.length; index++){
      let current = array[index];
      for (var value= index-1; value>=0 && array[value]>current; value--){
          array[value+1]=array[value];
      }
      array[value+1]=current;
  }
  return array;
}