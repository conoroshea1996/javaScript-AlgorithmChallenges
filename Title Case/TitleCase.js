//Using Replace //
// Check replace out here => https://www.w3schools.com/jsref/jsref_replace.asp //
function TitleCase(string) {
    const words = string.toLowerCase().split(' ');//setting variable words to the value of lowercase and splits the string at ' ' into an array
    let result = words.map(function (word) {// using map to create a new array after applying  this function to all the array elements that are passed in
        // check map out here => https://www.w3schools.com/jsref/jsref_map.asp //
        return word.replace(word.charAt(0), word.charAt(0).toUpperCase()); 
        //return each word after replacing the character at index 0 with the charecter at index 0 Uppercase
    });
    return result.join(' '); // joins the result array to make a string
}
console.log(TitleCase('the cat is fat'));

