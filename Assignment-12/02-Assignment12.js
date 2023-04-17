let obj = {
  id: [1, 2, 3],
  name: ["Hitanshu", "Ninad", "Amandeep"],
  scores: [90, 88, 92],
};

// a) Get Student Names using map functions

let studentNames = obj.name;
console.log(studentNames);

// b) Display 1 parameter (only value)

console.log("-----one parameter-----");
console.log(obj.id);
console.log(obj.name);
console.log(obj.scores);

// c) Display 2 parameters (value + key)

console.log("-----two parameter-----");
console.log(`id ${obj.id}`);
console.log(`name ${obj.name.join(",")}`);
console.log(`scores ${obj.scores.join(",")}`);

// d) Display 3 parameters (value + key + map)

console.log("-----three parameter-----");
console.log(`id ${obj.id}`);
console.log(obj);
console.log(`name ${obj.name.join(",")}`);
console.log(obj);
console.log(`scores ${obj.scores.join(",")}`);
console.log(obj);
