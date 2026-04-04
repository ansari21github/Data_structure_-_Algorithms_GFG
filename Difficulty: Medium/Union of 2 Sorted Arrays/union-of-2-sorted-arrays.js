/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
class Solution {
    findUnion(a, b) {
        // brutforce 
        
        // optimal solution
        
        let arr = [];
        let lengthA = a.length;
        let lengthB = b.length;
        let i = 0;
        let j = 0;
        
        
        while(i < lengthA && j < lengthB){
            if(a[i] <= b[j]){
                if(arr.length == 0 || arr[arr.length-1] !== a[i]){
                    arr.push(a[i]);
                }
                i++;
            }else{
                 if(arr.length == 0 || arr[arr.length-1] !== b[j]){
                    arr.push(b[j]);
                }
                j++;
            }
        }
        
        while(i<lengthA){
            
                if(arr.length == 0 || arr[arr.length-1] !== a[i]){
                    arr.push(a[i]);
                }
                
                i++;
        }
        
        while(j<lengthB){
            
            if(arr.length == 0 || arr[arr.length-1] !== b[j]){
                    arr.push(b[j]);
                }
                
                j++;
        }
        
        return arr;
        
    }
}