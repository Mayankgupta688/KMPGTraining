class Employee {
    constructor(name) {
        this.name = name;
    }
}

class Manager extends Employee {
    constructor(name, teamSize) {
        super(name);
        this.teamSize = teamSize;
    }
}

var data = new Employee("Mayank")

// Prototypical Chaining....