/**
 * @param {number[][]} matrix
 */
class Solution {
    booleanMatrix(mat) {
        // code here
        
        let rowL = mat.length;
        let colL = mat[0].length;
        
        let rowGame = new Array(rowL).fill(false);
        let colGame = new Array(colL).fill(false);
        
        
        for(let i=0; i<rowL; i++){
            for(let j=0; j<colL; j++){
                if(mat[i][j] === 1){
                    rowGame[i] = true;
                    colGame[j] = true;
                }
            }
        }
        
        for(let i=0; i<rowL; i++){
            for(let j=0; j<colL; j++){
                if(rowGame[i] || colGame[j]){
                    mat[i][j] = 1;
                }
            }
        }
        
        return mat;
    }
}
