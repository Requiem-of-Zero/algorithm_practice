// * #2037. Min Number of Moves to Seat Everyone
// Time O(n log n) Space O(1)

var minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < seats.length; i++) {
    count += Math.abs(seats[i] - students[i]);
  }
  return count;
};

// * #2418. Sort the People
// Time O(n log n) Space O(n)
var sortPeople = function (names, heights) {
  if (names.length === 1) return names;
  let [nameHeightMatrix, result] = [[], []];

  for (let i = 0; i < names.length; i++) {
    nameHeightMatrix.push([names[i], heights[i]]);
  }

  nameHeightMatrix.sort((a, b) => b[1] - a[1]);

  for (let [name, height] of nameHeightMatrix) {
    result.push(name);
  }

  return result;
};

