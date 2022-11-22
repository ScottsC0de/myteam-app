// developer.mozilla.org definition of an object in JS
// In JavaScript, an object is a standalone entity, with properties and type. 
// Compare it with a cup, for example. A cup is an object, with properties.
// A cup has a color, a design, weight, a material it is made of, etc.
// The same way, JavaScript objects can have properties, which define their characteristics

// a class is an 'Object blueprint' in JavaScript, as JS is a Prototype-based OOP
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
};

module.exports = Employee;