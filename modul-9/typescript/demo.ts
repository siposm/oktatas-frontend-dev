let a = 10
let b = 30

console.log(a * b)
console.log(a + 500)

class Student {
    name: string
    id: string
    birthYear: number

    greeting() {
        return `Hello my name is: ${this.name}`
    }
}

let stud = new Student()
stud.name = 'John Doe'
stud.id = 'AAA111'
stud.birthYear = 1998

interface ISubject {
    name: string
    credit: number
}

class Subject implements ISubject {
    name: string
    credit: number
    
    constructor(name: string, credit: number) {
        this.name = name
        this.credit = credit
    }
}

class UniStudent extends Student {
    completedCredits: number
    subjects: ISubject[] = []
    teachers: Array<string> = []

    constructor() {
        super();
        this.completedCredits = 0

        this.subjects.push(new Subject('JS', 4))
        this.subjects.push(new Subject('PHP', 3))
        this.subjects.push(new Subject('C#', 30))

        this.teachers.push('Kovacs Andras')
        this.teachers.push('Sipos Miklos')
    }
}

let uStud = new UniStudent()
uStud.name = 'Jane Doe'

console.log(uStud.greeting())

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~')

console.log(uStud)