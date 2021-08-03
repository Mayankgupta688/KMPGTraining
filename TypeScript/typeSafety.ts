var userName: string = "Mayank";
var userAge: number | string = 30;
userAge = "40";
var isWorking: boolean = true;
var salary: number = 10;
var bonus: number = 2;

interface IAddress {
    street: string;
    state: string;
    country: string;
    pinCode?: string;
    houseNo?: number;
}

var address: IAddress = {
    street: "A8",
    state: "Delhi",
    country: "India"
}

console.log(typeof(address));

var userAddress: IAddress;

userAddress = {
    street: "A8",
    state: "Delhi",
    country: "India",
    pinCode: "10085",
    houseNo: 1
}