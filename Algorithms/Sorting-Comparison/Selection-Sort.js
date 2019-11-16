// Selection sort O(N^2)
// To prevent data mutation, spread argument into new array. 
function swap(array, left, right){
    [array[left], array[right]]=[array[right], array[left]];
    return array;
}

function selectionSort(array){
    let start = 0;
    while(start<array.length){
        let min = start;
        for(let i = start+1; i<array.length; i++){
            if(array[i]<array[min]) min = i;
        }
        if(min>start){
            swap(array, start, min);
        }
        start++;
    }
    return array;
}