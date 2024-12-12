/**
 * Palindrome String!!
 */

const str = "DAD";
function getReversedStr (str){
    let reversedStr = "";
    for(let i=str.length-1; i>=0; i--){  //Palindrome String Using For Condition
        reversedStr += str[i];
    }
    return reversedStr;
}
const result = getReversedStr(str);
if(result === str){
    console.log("The string is a palindrome");
}else{
    console.log("The string is not a palindrome");
}











// const str = "SaiKrishna";
// const  reversedStr = str.split("").reverse().join("");

// if (str === reversedStr){
//     console.log("The string is a palindrome");
// }else {
//     console.log("The string is not a palindrome");
// }