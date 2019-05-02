//using indexof //
// check it out indexof here => https://www.w3schools.com/jsref/jsref_indexof.asp //
function mutations(array) {
    const test = array[1].toLowerCase(); // setting variable to second array all lowercase letters
  const target = array[0].toLowerCase(); // setting variable to first array all lowercase letters
  for (let i=0;i<test.length;i++) { // basic for loop
    if (target.indexOf(test[i]) < 0) // if target variable index of doesnt contain any element from the test variable it return -1
    return false; //will return false if indexof method returns < 0
  }
  return true;
}
console.log(mutations(['heLLo','abcd']))