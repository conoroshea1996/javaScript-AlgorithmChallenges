// Using Filet Mehtod //
//check Filter Out here => https://www.w3schools.com/jsref/jsref_filter.asp //
function FalsyBouncer(array) {
    const result = array.filter(Boolean); // setting result variable // Check Boolean out here => https://www.freecodecamp.org/forum/t/javascript-boolean/14311 // 
    // using thw filter method we can make a new array of all the values the are Boolean true 
    return result;
}


console.log(FalsyBouncer([7, "ate", "", false, 9]));