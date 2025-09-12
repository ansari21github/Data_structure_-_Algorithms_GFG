/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
class Solution {
    findUnion(a, b) {
        // code here
        let result = [];
        
        let i = 0;
        let j = 0;
        
        while(i < a.length && j < b.length){
          if(a[i] < b[j]){
              if(result.length === 0 || result[result.length-1] !== a[i]){
                  result.push(a[i]);
              }
              i++;
          }else if(a[i] > b[j]){
              if(result.length === 0 || result[result.length-1] !== b[j]){
                  result.push(b[j]);
              }
              j++;
          }else{
              if(result.length === 0 || result[result.length-1] !== a[i]){
                  result.push(a[i]);
              }
              i++;
              j++;
          }
          
        }
          while(i<a.length){
                if(result.length === 0 || result[result.length-1] !== a[i]){
                  result.push(a[i]);
              }
              i++;
          }
          
           while(j<b.length){
                if(result.length === 0 || result[result.length-1] !== b[j]){
                  result.push(b[j]);
              }
              j++;
          }
          
          return result;
    }
}