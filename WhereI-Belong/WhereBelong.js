// Using Sort //
// Check sort method out here => https://www.w3schools.com/js/js_array_sort.asp //
function WhereiBelong(array,num) {
    const sortedArray = array.sort(function(a,b) {return a-b}); //setting a variable 
    // using the sort method we pass a compare function that will sort the array  
    for (let i = 0; i < sortedArray.length; i++) {// basic for loop
            if (sortedArray[i] >= num) { // if the element in the array is greater or equal to              
                return i; // return i
            }
    }
    return sortedArray.length;
}
console.log(WhereiBelong([34,44,31,3,2],30));
