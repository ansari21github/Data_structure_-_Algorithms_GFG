class Solution {
    arrange(arr) {
        // code here
    //     let arr1 = [];
    
    // for(let i=0; i<arr.length; i++){
    //     console.log(arr[arr[i]])
    //     arr1.push(arr[arr[i]])
    // }
    // return arr1
    
     let n = arr.length;

  // First step: store both old and new values
  for (let i = 0; i < n; i++) {
    arr[i] = arr[i] + (arr[arr[i]] % n) * n;
  }

  // Second step: update to final transformed values
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(arr[i] / n);
  }

  return arr;
    }
}