/**
 * @param {number[]} arr
 * @return {boolean}
 */

class Solution {
    pythagoreanTriplet(arr) {
        // code here
        // let squ = arr.map(num => num * num);
        
        // squ.sort((a,b)=>a-b);
        
        // let n = squ.length;
        
        // for(let i = n-1; i>=2; i--){
        //     let left = 0; 
        //     let right = i-1;
            
        //     while(left < right){
        //         if(squ[left] + squ[right] === squ[i]){
        //             return true;
        //         }
                
        //         if(squ[left] + squ[right] < squ[i]){
        //             left++;
        //         }else{
        //             right--;
        //         }
        //     }
        // }
        // return false;
         let n = arr.length;

  // Store squares in a Set for O(1) lookup
  let squareSet = new Set(arr.map(num => num * num));

  // Check every pair (a, b)
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let sum = arr[i] * arr[i] + arr[j] * arr[j];
      if (squareSet.has(sum)) {
        return true;
      }
    }
  }
  return false;
    }
}