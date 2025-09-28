/**
 * @param number[][] arr
 * @returns number
 */
class Solution {
    rowWithMax1s(arr) {
        // code here
        let maxIndex = 0;
        let maxCount = 0;
         for(let i=0; i<arr.length; i++){
             
             let count = 0;
             let n = arr[i].length;
             for(let j=0; j<n; j++){
                 if(arr[i][j] === 1){
                     count++;
                 }
             }
             if(count > maxCount){
                 maxCount = count;
                 maxIndex = i;
             }
             
         }
         
         return maxCount > 0 ? maxIndex : -1;
    }
}
