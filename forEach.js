//Named functions
const numbers=[1,2,3,4,5];
function double(element,index,arry){
    arry[index]=element*2;
}
numbers.forEach(double);
console.log(numbers);

//Anonymous function
const numbers1=[1,2,3,4,5];

numbers1.forEach(function (element,index,array){
    array[index]=element*2;
});
console.log(numbers1);

//Arrow function
const numbers2=[1,2,3,4,5];
numbers2.forEach((element,index,array)=>array[index]=element*2);
console.log(numbers2);