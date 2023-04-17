let hospitals = [
  {
    id: 1,
    name: "Hospital A",
    location: "Delhi",
    noOfBeds: 450,
    availability: "Yes",
  },
  {
    id: 2,
    name: "Hospital B",
    location: "Pune",
    noOfBeds: 150,
    availability: "No",
  },
  {
    id: 3,
    name: "Hospital C",
    location: "Pune",
    noOfBeds: 350,
    availability: "Yes",
  },
];

// filter hospitals according to Number of Beds > 200
let highBedsHospitals = hospitals.filter((hospital) => hospital.noOfBeds > 200);

// filter hospitals according to Availability of Beds = Yes
let availableBedsHospitals = hospitals.filter(
  (hospital) => hospital.availability === "Yes"
);

// filter hospitals according to Location = Pune
let puneHospitals = hospitals.filter(
  (hospital) => hospital.location === "Pune"
);

console.log(highBedsHospitals);
console.log(availableBedsHospitals);
console.log(puneHospitals);
