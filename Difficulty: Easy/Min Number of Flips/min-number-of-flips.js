/**
 * @param {string} S
 * @returns {number}
 */
class Solution {
    minFlips(s) {
        
        let flipsStartWith0 = 0;
  let flipsStartWith1 = 0;

  for (let i = 0; i < s.length; i++) {
    const expected0 = i % 2 === 0 ? '0' : '1';
    const expected1 = i % 2 === 0 ? '1' : '0';

    if (s[i] !== expected0) flipsStartWith0++;
    if (s[i] !== expected1) flipsStartWith1++;
  }

  return Math.min(flipsStartWith0, flipsStartWith1);
    }
}