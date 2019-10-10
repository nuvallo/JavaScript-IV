class Person {
  constructor(information) {
    this.name = information.name;
    this.age = information.age;
    this.location = information.location;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(InstInformation) {
    super(InstInformation);
    this.specialty = InstInformation.specialty;
    this.favLanguage = InstInformation.favLanguage;
    this.catchPhrase = InstInformation.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject} `;
  }
}

class Student extends Person {
  constructor(studInformation) {
    super(studInformation);
    this.previousBackground = studInformation.previousBackground;
    this.className = studInformation.className;
    this.favSubjects = studInformation.favSubjects;
  }

  listsSubjects() {
    return `${this.favSubjects}`;
  }

  PRAssignment(student, subject) {
    return `${student.name} has submitted a PR for ${subject}.`;
  }

  sprintChallenge(student, subject) {
    return `${student.name} has begun sprint challenge on ${subject}.`;
  }
}

class ProjectManagers extends Instructor {
  constructor(information) {
    super(information);
    this.gradClassName = information.gradClassName;
    this.favInstructor = information.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to @${channel}, standby times!`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}.`;
  }
}

// Person
const personOne = new Person({
  name: "Tyler",
  age: 19,
  location: "Jacksonville, FL",
  gender: "M"
});

const personTwo = new Person({
  name: "Taylor",
  age: 16,
  location: "Jacksonville, FL",
  gender: "F"
});

const personThree = new Person({
  name: "Kayla",
  age: 25,
  location: "Jacksonville, FL",
  gender: "F"
});

// Instuctors
const InstructorOne = new Instructor({
  name: "James",
  age: 23,
  location: "Los Angeles, CA",
  gender: "M",
  specialty: "React",
  favLanguage: "JavaScript",
  catchPhrase: "Javascript is amazing!"
});

const InstructorTwo = new Instructor({
  name: "Kim",
  age: 63,
  location: "Chicago, IL",

  gender: "F",
  specialty: "HTML/CSS",
  favLanguage: "N/A",
  catchPhrase: "HTML and CSS is super fun!"
});

// Students
const StudentOne = new Student({
  name: "Kindle",
  age: 54,
  location: "Statesville, NC",
  gender: "F",
  previousBackground: "Worked at Shoe Locker",
  className: "PT12",
  favSubjects: "CSS"
});

const StudentTwo = new Student({
  name: "Hayes",
  age: 21,
  location: "Douglas, GA",
  gender: "M",
  previousBackground: "Mechanic at Chevrolet",
  className: "PT16",
  favSubjects: "Python"
});

const StudentThree = new Student({
  name: "Michael",
  age: 29,
  location: "Houston, TX",
  gender: "M",
  previousBackground: "cashier at Burger king",
  className: "PT26",
  favSubjects: "HTML"
});

// Project Manager
const projectManagerOne = new ProjectManagers({
  name: "Mark",
  age: 31,
  location: "Brooklyn, NY",
  gender: "M",
  specialty: "React Native",
  favLanguage: "JavaScript",
  catchPhrase: "React is the best framework",
  gradClassName: "PT8",
  favInstructor: "Kim"
});

const projectManagerTwo = new ProjectManagers({
  name: "Victoria",
  age: 27,
  location: "Phoenix, AZ",
  gender: "F",
  specialty: "Node.js",
  favLanguage: "JavaScript",
  catchPhrase: "Node is amazing!",
  gradClassName: "PT14",
  favInstructor: "James"
});

console.log(personOne.speak());
console.log(personTwo.speak());
console.log(personThree.speak());
console.log(InstructorOne.speak());
console.log(InstructorOne.demo("CSS"));
console.log(InstructorOne.grade(StudentOne, "LESS"));
console.log(InstructorTwo.speak());
console.log(InstructorTwo.demo("LESS"));
console.log(InstructorTwo.grade(personTwo, "HTML"));
console.log(StudentOne.speak());
console.log(StudentOne.listsSubjects());
console.log(StudentOne.PRAssignment(StudentOne, "JavaScript"));
console.log(StudentOne.sprintChallenge(StudentOne, "HTML"));
console.log(StudentTwo.speak());
console.log(StudentTwo.listsSubjects());
console.log(StudentTwo.PRAssignment(StudentTwo, "Node.JS"));
console.log(StudentTwo.sprintChallenge(StudentTwo, "React"));
console.log(StudentThree.speak());
console.log(StudentThree.listsSubjects());
console.log(StudentThree.PRAssignment(StudentThree, "Python"));
console.log(StudentThree.sprintChallenge(StudentThree, "CSS"));
console.log(projectManagerOne.speak());
console.log(projectManagerOne.demo("LESS"));
console.log(projectManagerOne.grade(projectManagerOne, "Node.JS"));
console.log(projectManagerOne.standUp("CS16"));
console.log(projectManagerOne.debugsCode(StudentOne, "Python"));
console.log(projectManagerTwo.speak());
console.log(projectManagerTwo.demo("SASS"));
console.log(projectManagerTwo.grade(projectManagerTwo, "SQL"));
console.log(projectManagerTwo.standUp("CS17"));
console.log(projectManagerTwo.debugsCode(StudentTwo, "React"));
