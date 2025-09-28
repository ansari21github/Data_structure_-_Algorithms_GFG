/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    maxWater(arr) {
        // code here
        //  let maxWater = 0;
         
        //  for(let i=0; i<arr.length-1; i++){
        //      for(let j=i+1; j<arr.length; j++){
        //          let height = Math.min(arr[i],arr[j])
        //          let width = j-i;
        //          let water = height * width;
                 
        //          maxWater = Math.max(maxWater,water);
        //      }
        //  }
        //  return maxWater;
        
         let left = 0;
    let right = arr.length - 1;
    let maxWater = 0;

    while (left < right) {
        let height = Math.min(arr[left], arr[right]);
        let width = right - left;
        let water = height * width;

        maxWater = Math.max(maxWater, water);

        // Move the pointer at the smaller height
        if (arr[left] < arr[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
    }
}