const words=["apple","banana",'grapes'];
//Named functions
function upperCase(element,index,array){
    return element.toUpperCase();
}
let result=words.map(upperCase);
console.log(result);

//Anonymous function
let result1=words.map(function (element,index,array){
    return element.toUpperCase();
});
console.log(result1);
//Arrow functions

console.log(words.map((element,index,array)=>element.toUpperCase()));
