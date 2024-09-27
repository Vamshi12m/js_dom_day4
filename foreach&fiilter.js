const students=[{name:'john cena',marks:45},{name:'jane',marks:72},{name:'bob',marks:38},{name:'Alice',marks:85}];
function greater(element){
  return element.marks>50
}
let result=students.filter(greater);
console.log(result);

function names(element){
    console.log(element.name);
}
result.forEach(names);

//Anonymous function 
let result1=students.filter(function (element){
  return element.marks>50
});
console.log(result1);

result1.forEach(function (element){
  console.log(element.name);
});

//Arrow function
let result2=(students.filter((element)=>element.marks>50));
console.log(result2);
result2.forEach(data=>console.log(data.name))
