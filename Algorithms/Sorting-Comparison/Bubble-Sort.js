//  Worst case O(N^2) best case O(N) *optomized for almost sorted array 
// To prevent data mutation, spread argument into new array. 
function swap(array, left, right){
    [array[left], array[right]]=[array[right], array[left]];
    return array;
}

function bubbleSort(array){
    let end = array.length;
    do{
        let left = 0;
        let right = 1;
        let last = end-1;
        var swaps = false;
        while(right<end){
            if(array[right]<array[left]){
                swap(array, left, right);
                last = right;
                swaps = true;
            }
            right++;
            left++;
        }
        end = last;
    }while(swaps);
    return array;
}