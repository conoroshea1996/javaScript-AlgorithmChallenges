function chunkArrayInGroups(array,num) {
        let finalArray =[];// Setting a varible to an empty array
        i=0; // setting variable to value of 0
        while( i< array.length){ //while i is less than the length of array do this
         finalArray.push(array.slice(i,i+=num)); // put a slice from i to i +num of our array into finalArray 
        }
        return finalArray;         
}
console.log(chunkArrayInGroups(["a", "b", "c", "d",'4'], 3));
