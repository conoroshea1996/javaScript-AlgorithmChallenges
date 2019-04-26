//---------------Using substr Method---------------------//
// Check out  substr Method here => https://www.w3schools.com/jsref/jsref_substr.asp  //
function TruncateString(string,num) {
    if(string.length > num){ //if the length of the string is greater than num
         string = string.substr(0,num); // setting string variable from the start to num variable
            return `${string}...`; // returns string with ... using template literals 
                            }      //CheckOut template literals here => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals //
     else if(string.length === num){ // if the string lenght is the same as num 
        return string;
    }
}
console.log(TruncateString('conor',5))