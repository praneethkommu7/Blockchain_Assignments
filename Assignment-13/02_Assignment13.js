let students = [
  { name: "John", marks: "92" },
  { name: "Oliver", marks: "85" },
  { name: "Michael", marks: "79" },
  { name: "Dwight", marks: "95" },
  { name: "Oscar", marks: "64" },
  { name: "Kevin", marks: "48" },
];

const getGrade = (marks) => {
  if (marks > 90) {
    return "A";
  } else if (marks > 80) {
    return "B";
  } else if (marks > 70) {
    return "C";
  } else if (marks > 60) {
    return "D";
  } else if (marks > 50) {
    return "E";
  } else {
    return "F";
  }
};

let grades = students.map((student) => {
  return { name: student.name, grade: getGrade(student.marks) };
});

let groupedGrades = grades.reduce((acc, curr) => {
  if (acc[curr.grade]) {
    acc[curr.grade].push(curr);
  } else {
    acc[curr.grade] = [curr];
  }
  return acc;
}, {});

console.log(groupedGrades);
