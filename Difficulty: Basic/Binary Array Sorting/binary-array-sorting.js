/**
 * @param number[] arr
 * @returns void
 */
class Solution {
    // Function to sort the binary array in non-decreasing order
    binSort(arr) {
        // code here
       let zCount = 0;
       
       for(let i=0; i<arr.length; i++){
           if(arr[i] === 0){
               zCount++;
           }
       }
       
       for(let i=0; i<arr.length; i++){
           arr[i] = i < zCount ? 0 : 1;
       }
       
       return arr;
    }
}
