function ReverseStr(str) {
    const array = str.split(''); //converts string into array
    array.reverse(); 
    const result = array.join('');
    return result;
}
console.log(ReverseStr("hello"));