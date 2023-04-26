export class User {
    public id: string = ''
    public firstName: string = ''
    public lastName: string = ''
    public age: number = 0
    public gender: string = ''
    public email: string = ''
    public phone: string = ''
    public username: string = ''
    public password: string = ''
    public birthDate: string = ''
    public image: string = ''

    public toString() : string {

        let s = ''
        Object.entries(this).forEach(([key, value]) => {
            s += `${key}: ${value}`
            s += ' | '
        })

        return s
        // return `${this.id} - ${this.firstName} ${this.lastName}`
    }
}