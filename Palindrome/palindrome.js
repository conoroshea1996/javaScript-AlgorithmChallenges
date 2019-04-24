//------ Using Regex----------//
function palindromeRegex(string) {
    string = string.toLowerCase().replace(/[\W_]/g,''); // Converts String To Lower Case and keeps only letters or numbers in string 
    if (string === string.split('').reverse().join('')){ // Reverse String and compare
        return true 
    } else{
        return false;
    }                     
}

console.log(palindromeRegex('A man. A plan. A canal. Panama'));
console.log(palindromeRegex('hello World'));

