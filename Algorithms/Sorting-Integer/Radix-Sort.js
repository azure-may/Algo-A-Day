// Sort based on base ten binary integers for non integer datatypes convert to binary
// Radix Sort time best and worst case O(Nk) space O(N+k)
function getDigit(integer, place){
  return Math.floor( Math.abs(integer) / Math.pow(10,place) % 10 );
}
function digitCount(integer){
  if(integer===0) return 1;
  return Math.floor(Math.log10(Math.abs(integer)))+1
}
function maxDigits(array){
  let max = 0;
  array.forEach( integer =>{
      let count = digitCount(integer);
      max = Math.max(max, count);
  });
  return max;
}
function radixSort(array){
  let count=maxDigits(array);
  for( let k=0; k<count; k++){ 
      let sort = Array.from({length: 10}, ()=> []);
      for( let i=0; i<array.length; i++ ){
          let digit = getDigit(array[i], k);
          sort[digit].push(array[i]);
      }
      array = [].concat(...sort);
  }
  return array; 
}