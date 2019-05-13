//console.log("hi from node.js");
/*
const person=require('./person');
console.log(person);
console.log(person.age);
*/
const Person=require('./person');

const person1=new Person('ash',23);

person1.greeting();