//using Splice //
//check out splice here => https://www.w3schools.com/jsref/jsref_splice.asp //
function SliceSplice(array1,array2,n) {
   const arr2 = array2.slice();// setting a new varible to store array2 // check slice out here =>https://www.w3schools.com/jsref/jsref_slice_array.asp //
   for (let i = 0; i < array1.length; i++) {// basic for loop 
        arr2.splice(n,0,array1[i]);// using splice to add each element into your new arr2 variable
        n++; // adding 1 to the staring point of where we begin our slice each time.
   }
   return arr2; //return our new arr2 :D
}
console.log(SliceSplice([1, 2, 3], [4, 5, 6],2));

  