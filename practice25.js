/*  This property allows us to add new methods to the object constructors   */
function Employee(first, last, age, gender) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.gender = gender;
}

/* This addition of new methods takes place at runtime.
   The javascript engine first looks into the object for a particular property. 
   If the property is not found, then it checks the object prototype for the property.
   It is fetched from the prototype directly.
*/

Employee.prototype.name = function () {
    return this.firstName + "\t" + this.lastName;
}
var emp1 = new Employee("John", "Jones", 30, "Male");
str = `Full Name: ${emp1.name()}`;
console.log(str);

/* Note that here name is to be called as a function. It is not a data member.
It is a member method  */