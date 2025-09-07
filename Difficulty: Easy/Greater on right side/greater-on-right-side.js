// User function Template for javascript

class Solution {
    nextGreatest(arr) {
      let n = arr.length;
      let maxFromRight = -1;
      
      for(let i = n-1; i>=0; i--){
          let current = arr[i];
          arr[i] = maxFromRight;
          
          if(current > maxFromRight){
              maxFromRight = current;
          }
      }
      return arr;
      
//       Time: O(n) (single pass)

// Space: O(1) (in-place replacement)
    }
}
