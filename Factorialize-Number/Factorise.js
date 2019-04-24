//------  Recursion       -------//
function factorise(num) {
    if(num===1){
        return 1;
    } else{
        return num * factorise(num-1);
    }
}
console.log(factorise(5))
//------  Loop      -------//
function factorise1(num) {
    if(num===1){
        return 1;
    }
    for(let i=num-1; i>=1; i--){
        num = num*i;
    }
    return num;
}
console.log(factorise1(5));

