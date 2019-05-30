/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: When 'this' is called in global scope, it will point to the 'Window' object.
* 2. Implicit Binding: Using dot notation to invoke a function.
* 3. New Binding: Using the word 'new', you are creating a new object referenced by 'this' 
* 4. Explicit Binding: By implementing .call, .apply or .bind -- It overrides what 'this' keyword points to, to give it another object.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
const example = () => {console.log(this)};
console.log(example()); undefined

// Principle 2
// code example for Implicit Binding
const person = {
    firstName: 'John',
    lastName: 'Doe',
    intro: function() {
        return `Hello, my name is ${this.firstName} ${this.lastName}`
    }
}

console.log(person.intro()) // Hello, my name is John Doe

// Principle 3
// code example for New Binding
function thatGuy(hisName) {
    this.name = hisName;
    this.hi = 'Hi, I am ';
    this.sayHi = function() {
        console.log(`${this.hi} ${this.name}`); 
        console.log(this);
    }
}

const tom = new thatGuy('Tom');
const jake = new thatGuy('Jake');
console.log(tom.sayHi()); // Hi, I am Tom
console.log(jake.sayHi()); // Hi, I am Jake

// Principle 4
// code example for Explicit Binding
console.log(tom.sayHi.call(jake));
console.log(jake.sayHi.apply(tom))