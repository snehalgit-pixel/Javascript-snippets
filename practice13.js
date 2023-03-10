/* for of */
let salaries = [50000, 54000, 45000, 48000, 56000, 55000];
let i = 0;
for (salary of salaries) {
    console.log("Salary\t" + (i + 1) + "\t=" + salary + "\n");
    i += 1;
}
i = 0;
for (salary of salaries) {
    salary += 5000;
    salaries[i] = salary;
    i += 1;
}
console.log(salaries);