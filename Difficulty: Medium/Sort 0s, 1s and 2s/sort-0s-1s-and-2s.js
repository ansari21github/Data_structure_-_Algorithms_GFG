/**
 * @param {number[]} arr
 * @returns {void}
 */

class Solution {
    sort012(arr) {
        // code here
        let low = 0; 
        let mid = 0;
        let high = arr.length-1;
        
        while(mid <= high){
            if(arr[mid] === 0){
                [arr[low],arr[mid]] = [arr[mid],arr[low]]
                mid++;
                low++;
            }else if(arr[mid] === 1){
                mid++
            }else{
                [arr[mid],arr[high]] = [arr[high],arr[mid]]
                high--;
            }
        }
        return arr;
    }
}