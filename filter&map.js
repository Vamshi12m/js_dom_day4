const numbers=[4,10,15,6,25,8];
//Named functions
function lessThan(element,index,array){
    if(element>=10){
        return element;
    }
}
let result1=numbers.filter(lessThan);
console.log(result1);
function square(element){
    return element*element;
}
let result2=result1.map(square);
console.log(result2);

//Anonymous function
let result3=numbers.filter(function (element){
    if(element>=10){
        return element;
    }
})
console.log(result3);
let result4=result3.map(function (element){
    return element*element;
});
console.log(result4);

//Arrow function

let result5=(numbers.filter((element)=>element>=10));
console.log(result5);
console.log(result5.map((element)=>element*element));
