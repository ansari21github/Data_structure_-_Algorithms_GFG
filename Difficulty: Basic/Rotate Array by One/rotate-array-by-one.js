// User function Template for javascript
class Solution {
    rotate(arr) {
        let n = arr.length;
        
        if(n<=1){
            return;
        }
        
        let lastElement = arr[n-1];
        
        for(let i = n-1; i>0; i--){
            arr[i] = arr[i-1];
        }
       arr[0] = lastElement;

    } 
}