class Employees {
    name: string;
    age: number;
    private bonus: number

    constructor(userName: string, userAge: number) {
        this.name = userName;
        this.age = userAge;
    }

    getBonusData() {
        console.log(this.bonus);
    }

    setBonusData(bonus: number) {
        this.bonus = bonus;
    }

    getDetails(): void {
        console.log(this.name)
    }
}

var emp: Employees;
emp = new Employees("Mayank", 20);
emp.setBonusData(10)
emp.getBonusData();
debugger;