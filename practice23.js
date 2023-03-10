/*
  To demonstrate constructors and the application of this 
*/
function createEmployeeObject(firstName, lastName, gender, designation) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.designation = designation;
}
var obj1 = new createEmployeeObject("John", "Jones", "M", "Manager");
var obj2 = new createEmployeeObject("John", "Stewart", "M", "Assistant Manager");
var str1 = `Name: ${obj1.firstName}\t${obj1.lastName} \n Designation: ${obj1.designation}`;
var str2 = `Name: ${obj2.firstName}\t${obj2.lastName} \n Designation: ${obj2.designation}`;
console.log(str1);
console.log(str2);

/* Note that if we don't return any value explicitly, then javascript returns the value undefined
The 'new' keyword creates an object as well as returns it.  */