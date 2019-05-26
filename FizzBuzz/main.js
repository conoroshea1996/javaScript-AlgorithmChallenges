for (let i = 0; i <= 100; i++) {
    if (i%3 === 0 && i%5 ===0) { // if the number in the currenteration is divideable by 3 and 5 print fizz buzz
        console.log('fizzbuzzz');
    }
    else if( i %3 === 0){ //else check if it is dividable by 3 and log fizz
        console.log('fizz');
    }
    else if (i %5 === 0) { //else check if it is dividable by 5 and log buzz
        console.log('buzz');
    }
    else{ //else log the current number in the iterration
        console.log(i); 
    }
    
}