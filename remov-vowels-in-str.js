/**
 * Removing Vowels From String
 */

const string = "Hello Welcome to 100 Days of MERN Stack Challenge";

function getStrWithNoVowels(str) {
 const vowels = ["a", "e", "i", "o", "u"];
 let result = "";
 for(let char of str){
    if(!vowels.includes(char.toLowerCase())){
        result += char;
    }
 }   
 return result;
}


const updatedStr = getStrWithNoVowels(string);
console.log(updatedStr);