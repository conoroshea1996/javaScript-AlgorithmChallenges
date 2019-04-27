function FindKeeper(array, func) {
    let num = 0; // setting variable to 0
    for(var i = 0; i < array.length; i++) { //for loop to go through all the array
      num = array[i]; // sets variable to number to index of the array
      if (func(num)) { // if the function paramenter is true 
        return num; // Return num which is set to first item in the array that meets the parameters
      }
    }
    return undefined; // return undefined if none of the above is met
  }


console.log(FindKeeper([7,5,62,69], num => num % 3 === 0));