// User function Template for javascript
class Solution {
    /**
    * @param number date
    * @param number[] car
    * @param number[] fine

    * @returns string[]
    */
    totalFine(date, car, fine) {
        // code here
        let totalFine = 0;
        
        
        for(let i=0; i<car.length; i++){
            if(date % 2 === 0){
                if(car[i] % 2 !== 0){
                    totalFine += fine[i];
                }
            }else{
                if(car[i] % 2 === 0){
                     totalFine += fine[i];
                }
            }
        }
        
        return totalFine;
    }
}