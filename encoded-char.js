/**
 * Generate a secret code for the Given String!
 */

const inputStr = "Krishna";
const shiftByPos = 4; 

const getEncodeStr = (str, shiftByPos) => { 
    let encodedStr = "";
    let currentPos = 0, newPos = 0;
    for (let i = 0; i < str.length; i++) {
        currentPos = str.charCodeAt(i);
        newPos = currentPos + shiftByPos;
        encodedStr += String.fromCharCode(newPos);
    }
    return encodedStr;
};
console.log(getEncodeStr(inputStr, shiftByPos));
