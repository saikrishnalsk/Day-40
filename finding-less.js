/**
 * Finding Sum of Numbers Less Than 40
 */

const arr = [10,17,61,54,44,32,39,23];

const result = arr.reduce((acc,cur) => cur <40 ? acc + cur: acc, 0);

console.log(result); // Output: 180
    

