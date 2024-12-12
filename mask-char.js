/**
 *  Masking the Character last 4 characters of a string
 */

const str = "12345678987654321";

const maskChar = "#".repeat(4);
const result = str.slice(0, str.length - 4) + maskChar; //using Slice Method
console.log(result);