//------------- Using EndsWith ---------------------------//
// Check out endsWith Mehod here => https://www.w3schools.com/jsref/jsref_endswith.asp ///
function ConfirmEnd(string,end) {
    if(string.endsWith(end)){// End method which checks if a string ends with 
        return true;
    }else{
        return false;
    };
}
console.log(ConfirmEnd('conor','r'));

//------------- Using Substr ---------------------------//
//Check out substr Method here => https://www.w3schools.com/jsref/jsref_substr.asp ///

function ConfirmEnd1(string,end) {
  let target = string.substr(-end.length);// returns a string the lenght of end
   if( target === end){ // check to see if string is eqaul to end 
       return true;
   } else{
       return false;
   }
}
console.log(ConfirmEnd1('Your a wizard Harry',' Harry'));
