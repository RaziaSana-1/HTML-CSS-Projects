function student() {
    this.name = "jon";
    if (this.constructor === student) {
     throw new Error("Your Error Message...");
    }
};
student.prototype.info = function () {
    return "student name is: " + this.name;
}
function Teacher(name) {
    this.name = name;
}

Teacher.prototype = Object.create(student.prototype);
var teacher1 = new Teacher("jasson");
console.log(teacher1.info());