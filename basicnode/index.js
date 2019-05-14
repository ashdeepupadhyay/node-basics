//console.log("hi from node.js");
/*
const person=require('./person');
console.log(person);
console.log(person.age);
*/
// const Person=require('./person');
// const person1=new Person('ash',23);

// person1.greeting();

const Logger=require('./logger');

const logger=new Logger();
 
logger.on('message',data=>console.log(`called listener `,data));

logger.log('hello world logger');
logger.log('hi');
logger.log('bye');