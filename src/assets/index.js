const car = {
  type: "Ford",
  model: "Fusion",
  year: 2019,
  color: "Silver",
  trim: "Titanium",
};

function myMaff(p1, p2) {
  return p1 * p2;
}

let result = myMaff(42, 24);
document.getElementById("demo").innerHTML =
  "The car is a " +
  car.year +
  " " +
  car.type +
  " " +
  car.model +
  " " +
  car.trim;
