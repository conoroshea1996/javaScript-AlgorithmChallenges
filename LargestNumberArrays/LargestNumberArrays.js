function LargestNumberArrays(array) {
    let results = []; //Setting Empty Array
    for (let i = 0; i < array.length; i++) { // For loop to go through each inner array in the outer array
        let largestNum = array[i][0]; // Setting variable to first number in each  inner array 
        for (let x = 0; x < array.length; x++) { // Inner For loop to loop through each element in the inner arrays
           if (array[i][x]>largestNum) {// if the current number in the array is bigger than the first number
               largestNum = array[i][x]; //sets largest num to current inner array index
           }  
        }
        results[i] = largestNum; // Sets each inner array to largestNum 
    }
    return results; 
}
//-----------------------TEST--------------///-----TEST------------/-----/---------/
console.log(LargestNumberArrays([[4, 5, 1, 3], [13,18], [32, 37, 39], [1006, 1001, 1]]));