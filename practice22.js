/*
  To demonstrate JSON.parse() application
*/
let text1 = '{"employees":[' + '{"firstName":"Hello","lastName":"World"},' + '{"firstName":"Hi","lastName":"Underworld"},' + '{"firstName":"Hola","lastName":"bc"}]}';
let obj = JSON.parse(text1);
console.log('Object:');
console.log(obj);
console.log(obj.employees[0]);
console.log(obj.employees);
