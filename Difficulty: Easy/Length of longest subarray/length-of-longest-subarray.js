// User function Template for javascript
class Solution {
    longestSubarray(arr) {

        // write code here
        
        let maxLen = 0;
        let currLen = 0;
        
        for(let num of arr){
            if(num >= 0){
                currLen++
                maxLen = Math.max(maxLen , currLen);
            }else{
                currLen = 0;
                
            }
        }
        
        return maxLen;
    }
}
