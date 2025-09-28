// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} sum
 * @return {number}
 */

class Solution {

    countTriplets(arr, n, sum) {
        // code here
     arr.sort((a,b)=>a-b);
     
     let count = 0;
     
     for(let i=0; i<n-2; i++){
         let left = i+1;
         let right = n-1;
         
         while(left < right){
             let currSum = arr[i] + arr[left] + arr[right];
             
             if(currSum < sum){
                 count += (right-left);
                 left++;
             }else{
                 right--;
             }
         }
     }
     return count;
    }
}