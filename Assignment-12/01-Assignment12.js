let obj = {
  id: [67, 48, 29],
  name: ["Hitanshu", "Ninad", "Amandeep"],
  salary: [75000, 82000, 98000],
};
// a) Print an array of all employee ids

console.log(`Employee IDs : ` + obj.id);

// b) Print count of employees

console.log(`Count of Employees : ` + obj.id.length);

// c) Print the name of the employee according to their id { key: value }

const emp = new Map();

for (let i = 0; i < obj.id.length; i++) {
  emp[obj.id[i]] = obj.name[i];
}

console.log(emp);

// d) Store the salaries of all employees in an array

const sal = [];

for (let i = 0; i < obj.salary.length; i++) {
  sal[i] = obj.salary[i];
}

console.log(sal);

// e) Calculate the average salary the company is paying to its employees

const avgSalary =
  obj.salary.reduce((acc, cur) => acc + cur, 0) / obj.salary.length;

console.log(avgSalary);
