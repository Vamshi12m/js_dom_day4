//Named functions
const numbers=[1,2,3,4,5];
function double(element,index,arry){
    arry[index]=element*2;
}
numbers.forEach(double);
console.log(numbers);

//Anonymous function

numbers.forEach(function (element,index,array){
    array[index]=element*2;
});
console.log(numbers);

//Arrow function

numbers.forEach((element,index,array)=>array[index]=element*2);
console.log(numbers);