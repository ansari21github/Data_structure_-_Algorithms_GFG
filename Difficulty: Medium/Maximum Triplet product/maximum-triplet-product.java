// User function Template for Java

class Solution {
    Long maxTripletProduct(Long arr[], int n) {
        // Complete the function
    //      let max = 0; 
    
    // for(let i=0; i<arr.length-2; i++){
    //     let left = i+1;
    //     let right = n-1;
        
    //     while(left < right){
    //         max = Math.max(max,(arr[i]*arr[left]*arr[right]))
    //         right--;
    //     }
    // }
    // return max;

        // Sort the array
        Arrays.sort(arr);

        // Case 1: Product of three largest numbers
        long case1 = (long) arr[n - 1] * arr[n - 2] * arr[n - 3];

        // Case 2: Product of two smallest numbers and the largest
        long case2 = (long) arr[0] * arr[1] * arr[n - 1];

        return Math.max(case1, case2);
    }
}