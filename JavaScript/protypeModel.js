class Employee {
    constructor() {
        this.name = "";
        this.age = "";
        this.designation = "";
        this.salary = "";
        this.bonus = "";
    }

    getDetails() {
        console.log(this.name + " " + this.age)
    }

    getName() {
        console.log(this.name)
    }

    getAge() {
        console.log(this.name)
    }

    getDesignation() {
        console.log(this.name)
    }
}

class Manager extends Employee {
    constructor() {
        super();
        this.teamsize = 10;
    }

    getTeamSize() {
        console.log("sdhaskfdk")
    }
}

var manager = new Manager();
manager.getAge()