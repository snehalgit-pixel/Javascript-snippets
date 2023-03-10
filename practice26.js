/* Demonstrating inheritance in JavaScript
   We will create two objects: Employee and Manager
   Manager is an Employee with special characteristics
   Manager inherits from Employee
*/
function Employee(first, last, age, gender) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.gender = gender;
}
Employee.prototype.nationality = function () {
    this.nationality = "Indian";
}
function Manager(dept, zone) {

    this.department = dept;
    this.zone = zone;
}
let emp1 = new Employee("Shyla", "Sharma", 29, "Female");
let emp2 = new Employee("Kaley", "Smith", 35, "Female");
let mgr1 = new Manager("Marketing", "North");
mgr1.__proto__.__proto__ = Employee.prototype;
mgr1.__proto__.__proto__ = emp2.__proto__.__proto__;

/* Inheritance application is taking place here */

let str1 = `Manager name: ${mgr1.first}\t${mgr1.last}`;
let str2 = `Employee name: ${emp1.first}\t${emp1.last}`;
console.log(str1 + "\n");
console.log(str2);