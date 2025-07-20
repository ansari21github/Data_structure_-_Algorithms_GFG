// User function Template for javascript

/**
 * @param {number[]} arr
 * @return {number}
 */

class Solution {
    findMissing(arr) {
  let n = arr.length;
  let d = arr[1] - arr[0];
  let count = 1;
  
  for (let i=1; i<n-1; i++){
      let s = arr[i+1] - arr[i];
      
      if(s==d){
          count++;
          break;
      }else{
          d=s;
      }
  }
  
  for (let i=1; i<n; i++){
      if(arr[i] != arr[i-1] + d){
          return arr[i-1] + d;
      }
  }
  return arr[n-1] + d;
    }
}
