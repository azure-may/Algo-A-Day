//linear search function
//accepts two parameters, an array and a value
//returns the index of the value in the array or returns -1
function linearSearch(array, input){
  let result = -1;
  array.forEach((value, index) => {
      if(value === input){
          return (result = index);
      }
  });
  return result;
}