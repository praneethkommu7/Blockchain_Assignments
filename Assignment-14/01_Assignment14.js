let employees = [
  {
    id: 1,
    name: "Abhinav",
    department: "IT",
    Salary: 75000,
  },
  {
    id: 2,
    name: "Gaurav",
    department: "Sales",
    Salary: 52000,
  },
  {
    id: 3,
    name: "Raj",
    department: "IT",
    Salary: 64000,
  },
];

// filter employees according to department = IT
let itEmployees = employees.filter((employee) => employee.department === "IT");

// filter employees who earn a salary < 65000
let lowSalaryEmployees = employees.filter(
  (employee) => employee.Salary < 65000
);

console.log(itEmployees);
console.log(lowSalaryEmployees);
