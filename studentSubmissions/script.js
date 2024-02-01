const submissions = [
  { name: "Jane", score: 95, passed: true },
  { name: "Joe", score: 77, passed: true },
  { name: "Jack", score: 59, passed: false },
  { name: "Jill", score: 88, passed: true },
];
let addSubmission = function (array, newName, newScore) {
  const newObject = {
    name: newName,
    score: newScore,
    passed: newScore >= 60,
  };
  array.push(newObject);
};
addSubmission(submissions, "Fawaz", 90);
console.log(submissions);

let deleteSubmissionByIndex = function (array, index) {
  array.splice(index, 1);
};
deleteSubmissionByIndex(submissions, 1);
console.log(submissions);

let deleteSubmissionByName = function (array, name) {
  const index = array.findIndex((submission) => submission.name === name);
  array.splice(index, 1);
};
deleteSubmissionByName(submissions, "Fawaz");
console.log(submissions);

let editSubmission = function (array, index, score) {
  array[index].score = score;
  array[index].passed = score >= 60;
};
editSubmission(submissions, 0, 80);
console.log(submissions);

let findSubmissionByName = function (array, name) {
  const foundSubmission = array.find((name1) => name1.name === name);
  return foundSubmission;
};
let givenName = findSubmissionByName(submissions, "Joe");
console.log(givenName);

let findLowestScore = function (array) {
  return array.reduce((minimum, theArray) => {
    return theArray.score < minimum.score ? theArray : minimum;
  }, array[0]);
};
findLowestScore(submissions);
console.log();

function findAverageScore(array) {
  const totalScore = array.reduce((total, submission) => {
    return total + submission.score;
  }, 0);
  const averageScore = totalScore / array.length;
  return averageScore;
}
const averageScore = findAverageScore(submissions);
console.log(averageScore);

let filterPassing = function (array) {
  const passSubmissions = array.filter((submission) => submission.score >= 60);
  return passSubmissions;
};
const passSubmissions = filterPassing(submissions);
console.log(passSubmissions);

let filter90more = function (array) {
  const above90 = array.filter((submission) => submission.score >= 90);
  return above90;
};
const above90 = filter90more(submissions);
console.log(above90);
