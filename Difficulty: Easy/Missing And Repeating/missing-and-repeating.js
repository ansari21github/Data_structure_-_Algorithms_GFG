/**
 * @param {number[]} arr
 * @returns {number[]}
 */
class Solution {
    findTwoElement(arr) {
        // code here
        // let arr1 = [];
        // let n = arr.length;
        
        // for(let i=1; i<=n; i++){
        //     if(arr.indexOf(i) != arr.lastIndexOf(i)){
        //         arr1[0] = i
        //     }
        //     if(!arr.includes(i)){
        //         arr1[1] = i;
        //     }
        // }
        // return arr1;
        
        let n = arr.length;
    let arr1 = [];

    // Create a frequency array
    let freq = new Array(n + 1).fill(0);

    for (let num of arr) {
        freq[num]++;
    }

    for (let i = 1; i <= n; i++) {
        if (freq[i] === 2) {
            arr1[0] = i; // duplicate
        }
        if (freq[i] === 0) {
            arr1[1] = i; // missing
        }
    }

    return arr1;
    }
}