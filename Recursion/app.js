let add = function(num) {
    if(num <= 0){ // if the num is less than or equal to 0 do this
        return 0; // return 0
    } else{ // else do this
        console.log(num); // Always log everything to help visualize things 
        return num + add(num-1); 
        /* return num which is our parameter and add num - 1 
        #########################################################
        now what will happen is our functon will be called with an
        updated version of our parmater num so for example if we passed 5 as an intial 
        value for num the function is going to be called again but with 4 cause 5 - 1 = 4
        but im no mathmagician so dont take my word for it :D. 

        this will repeat till we have some sort of exit coded into to our function which is why
        we say if num is less than 0 return

        this will exit our function 
        
        */
    }
}
console.log(add(5));
