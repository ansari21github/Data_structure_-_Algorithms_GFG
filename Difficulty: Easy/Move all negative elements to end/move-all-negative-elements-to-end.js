// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {void}
 */

class Solution {
    segregateElements(arr) {
        // code here
      let n = arr.length;
      
      let negativeArr = [];
      let positiveIndex = 0;
      
      
      for(let i=0; i<n; i++){
          if(arr[i]>=0){
              arr[positiveIndex++] = arr[i];
          }else{
              negativeArr.push(arr[i]);
          }
      }
      
      for(let i=0; i<negativeArr.length; i++){
          arr[positiveIndex++] = negativeArr[i];
      }
    }
}
