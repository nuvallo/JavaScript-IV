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

class Instructor {
  constructor(information) {
    this.specialty = information.specialty;
    this.favLanguage = information.favLanguage;
    this.catchPhrase = information.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student {
  constructor(information) {
    this.previousBackground = information.previousBackground;
    this.className = information.className;
    this.favSubjects = information.favSubjects;
  }

  listsSubjects() {
    return `${this.favSubjects}`;
  }

  PRAssignment(subject) {
    return `${student.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${student.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(information) {
    super(information);
    this.gradClassName = information.gradClassName;
    this.favInstructor = information.favInstructor;
  }

  standUp(channel) {
    return `${name} announces to ${channel}, @${channel} standy times!`;
  }

  debugsCode() {
    return `${name} debugs ${student.name}'s code on ${subject}`;
  }
}
