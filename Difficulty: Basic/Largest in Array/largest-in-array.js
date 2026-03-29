
class Solution {
    /**
    * @param number[] arr

    * @returns number
    */
    largest(arr) {
        // Brutforcce
        
        // for(let i=0; i<arr.length; i++){
        //     for(let j=0; j<arr.length-1-i; j++){
        //         if(arr[j] > arr[j+1]){
        //             let temp = arr[j];
        //             arr[j] = arr[j+1];
        //             arr[j+1] = temp;
        //             }
        //     }
        // }
        // return arr[arr.length-1];
        
        // optimal solution
        if(arr.length < 2) return arr[0];
        
        let max = arr[0];
        
        for(let i=0; i<arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }
        }
        
        return max;
    }
}
