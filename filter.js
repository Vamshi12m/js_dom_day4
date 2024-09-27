const numbers=[4,10,15,6,25,8];
// Named function 
function greater(element,index,array){
    if(element>10){
        return element;
    }
}
let result=numbers.filter(greater);
console.log(result);

//Anonymous function

let result1=numbers.filter(function (element,index,array){
    if(element>10){
        return element;
    }
});
console.log(result1);

//Arrow Function

console.log(numbers.filter((element,index,array)=>{if(element>10){return element}}));

