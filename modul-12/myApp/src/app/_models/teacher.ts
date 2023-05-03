import { Subject } from "./subject"

export class Teacher {
    id: string = ''
    name: string = ''
    neptun: string = ''
    birthYear: number = 0
    image: string = ''
    creatorName: string = ''
    teachedSubjects: Array<Subject> = []

    public createSubjects(subjectList: Array<any>) {
        subjectList.map((x:any) => {
            let subject = new Subject()
            subject.id = x.id
            subject.name = x.name
            subject.neptun = x.neptun
            subject.credit = x.credit
            subject.exam = x.exam
            subject.image = x.image
            subject.creatorName = x.creatorName
            subject.registeredStudents = x.registeredStudents
            this.teachedSubjects.push(subject)
        })
    }
}