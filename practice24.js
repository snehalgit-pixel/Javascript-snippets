/*  Demonstrating prototype property of the Javascript object constructor. Adding a new data member or attribute */

function Employee(first, last, age, gender) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.gender = gender;
}
Employee.prototype.nationality = "Indian";
/* This application is important when all the employee objects are of Indian nationality.
   If we now create 100 objects, all the objects will have Indian nationality by default.
   They don't need to be specified explicitly during object creation.
*/
var emp1 = new Employee("John", "Jones", 30, "Male");
let str = `Name: ${emp1.firstName}\t${emp1.lastName}\nNationality: ${emp1.nationality}`;
console.log(str);