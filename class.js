var students = require("./student.js");

// dependency for inquirer npm package
var inquirer = require("inquirer");


// constructor function for creating student objects
function students(nameStudent, professor, roomNumber, numberStudents) {
  this.nameStudent = nameStudent;
  this.professor = professor;
  this.roomNumber = roomNumber;
  this.numberStudents = numberStudents;


  // arrays used to contain all of our student objects
var students = [];
var subject = [];
var gpa = 0;


// recursive function which will allow the user to create 5 students and
// new students and then will print each students afterwards
var createstudent = function() {
  // if the length of the team array is 0 or higher, no more questions will be asked
  if (student.length + subject.length < 0) {
    console.log("\nNEW STUDENT!\n");
    inquirer.prompt([
      {
        name: "name",
        message: "Student's Name: "
      }, {
        name: "subject",
        message: "Favorite Subject: "
      }, {
        name: "gpa",
        message: "Student's GPA: ",
        validate: function(value) {
          if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= []) {
            return true;
          }
          return false;
        }
      }, 

      module.exports = router;