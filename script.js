//Part 1: Object creation
const student = {
    name: "William john",
    age: 19,
    enrolled: true,
    courses: ["English", "Arts", "Maths"],
    displayInfo() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
};

console.log(student.name);
console.log(student.age);
console.log(student.displayInfo());

//Part 2: JSON
const studentJSON = JSON.stringify(student);
console.log(studentJSON);

const newStudent = JSON.parse(studentJSON);
console.log(student === newStudent);

//Part 3: Destructuring
const { name, courses } = student;
console.log(name);
console.log(courses);

const scores = [80, 94, 78, 86];
const [score1, score2] = scores;
console.log(score1);
console.log(score2);

//Part 4: Spread operator
const clonedStudent = { ...student, graduationYear: 2022 };
console.log(clonedStudent);

const newCourses = ["Biology", "Science"];
const allCourses = [...student.courses, ...newCourses];
console.log(allCourses);

//Part 5: Object methods
student.addCourse = function(course) {
    this.courses.push(course);
};
student.totalCourses = function() {
    return this.courses.length;
};

student.addCourse("History");
console.log(student.courses);
console.log(student.totalCourses());

//Bonus:
const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log(averageScore);
