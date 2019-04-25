function Longeststr(str) {
  let words = str.split(' '); // splits string at ' ' and makes an array
  let size = 0; // setting an initaial value
  let max = ['']; // setting an empty array
 
  for (let i = 0; i < words.length; i++) {
      if(words[i].length >= size){ // if the current words lenght is greater than size
      size = words[i].length; // set size to the current lenght of word
     
      if(max[max.length-1].length < words[i].length){// if the last length in the max array is less than words
          max =[]; // set max array to empty
          max.push(words[i]); // push the current word into array
      }
      else{
          max = [...max,words[i]]; // using spread to just the elements from the max array 
      }
  }
}
return [...max];
}

console.log(Longeststr('The cat jumped and bumped in the bath'));

 