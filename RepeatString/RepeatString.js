//---------- Using Repeat Method  ---------------------------////

//Check out Repeat Method here => https://www.w3schools.com/jsref/jsref_repeat.asp ///
function RepeatString(string,num) {
if(num <=0){ // if num is less than or equal to 0 
    return (''); // return an empty string 
} 
else{ // else do this
    return string.repeat(num); // Repeat String  by the number of num
}
    
}
console.log(RepeatString('conor',2));
//--------------------------------------------////

//--------------- Using While Loop ---------------------///
function RepeatString1(string, times) {
  if (times ===0){ // if times = 0 
    return(''); // return empty string
  }
    var repeatedString = '';// Setting empty string 
    while (times > 0) {// while loop do this while times is greater than 0
      repeatedString += string; // Add this value to the repeatedstring variable 
      times --; // reomve 1 from times varible 
    }
    return repeatedString;
  }
console.log( RepeatString1('b',4));

