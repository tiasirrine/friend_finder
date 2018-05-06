// ===============================================================================
// DATA
// Below data will hold all of the surverys.
// Initially we just set it equal to a "dummy" data.
// But you could have it be an empty array as well.
// ===============================================================================

var questionArray = [
  {
    name: "tia",
    photo: "google.com",
    scores: [4, 4, 5, 4, 4, 5, 4, 4, 4, 3]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = questionArray;
