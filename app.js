// 1 => hello world!
//  console.log("hello world, your are running a Node app");

// 2 => exporting modules from another program and requiring it
// const tutorial = require('./tutorial');

// console.log(tutorial(2,6));

// 3 => Event driven on Node

const EventEmitter = require('events');

const eventEmitter = new EventEmitter ();

eventEmitter.on('name', (num1 , num2 ) => {
    console.log(num1 + num2);
});

eventEmitter.emit('name', 10, 90);

// We can extend the Prototype to our own Class
class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let michael = new Person('Michael');
let esther = new Person('Esther');

michael.on('name', () =>{
    console.log('my name is  ' + michael.name);
});

esther.on('name', () =>{
    console.log('my name is  ' + esther.name);
});

michael.emit('name');
esther.emit('name');

// 4 => ReadLine Module
