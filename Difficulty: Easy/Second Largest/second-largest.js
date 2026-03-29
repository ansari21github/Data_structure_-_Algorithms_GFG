class Solution {
    getSecondLargest(arr) {
        // brut froce
        // bubble sort + reverse loop from second last element to check second largest once you get 
        // break the loop
        // Time complexity - O(nlog(n) + n)
        
        // Better solution 
        // first use a loop to find max element , then reverse loop to find second 
        // largest solution.
        
        // optimal solution - 
        
        let max = arr[0];
        let secondMax = -1;
        
        for(let i=1; i<arr.length; i++){
            if(arr[i] > max){
                secondMax = max;
                max = arr[i];
            }else if(arr[i] < max && arr[i] > secondMax){
                secondMax = arr[i];
            }
        }
        return secondMax === -1 ? -1 : secondMax;
    }
}