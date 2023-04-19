var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = 10;
var b = 30;
console.log(a * b);
console.log(a + 500);
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.greeting = function () {
        return "Hello my name is: ".concat(this.name);
    };
    return Student;
}());
var stud = new Student();
stud.name = 'John Doe';
stud.id = 'AAA111';
stud.birthYear = 1998;
var Subject = /** @class */ (function () {
    function Subject(name, credit) {
        this.name = name;
        this.credit = credit;
    }
    return Subject;
}());
var UniStudent = /** @class */ (function (_super) {
    __extends(UniStudent, _super);
    function UniStudent() {
        var _this = _super.call(this) || this;
        _this.subjects = [];
        _this.teachers = [];
        _this.completedCredits = 0;
        _this.subjects.push(new Subject('JS', 4));
        _this.subjects.push(new Subject('PHP', 3));
        _this.subjects.push(new Subject('C#', 30));
        _this.teachers.push('Kovacs Andras');
        _this.teachers.push('Sipos Miklos');
        return _this;
    }
    return UniStudent;
}(Student));
var uStud = new UniStudent();
uStud.name = 'Jane Doe';
console.log(uStud.greeting());
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(uStud);
