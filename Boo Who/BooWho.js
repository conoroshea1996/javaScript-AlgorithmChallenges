// ---- using typeof ----//
// check out typeof here => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof //
function BooWho(bool) {
    if(typeof bool === 'boolean'){ // if the type of bool is a boolean value
        return true;
    }else{ // if it is not then
        return false;
    }
}
console.log(BooWho(true));
console.log(BooWho(1));

