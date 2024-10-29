export class ToDo {
    id: string = ''
    name: string = ''
    description: string = ''
    timestamp: Date = new Date()

    constructor() {
        this.id = this.generateGuid()
    }

    private generateGuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
            .replace(/[xy]/g, function (c) {
                const r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8)
                return v.toString(16)
            })
    }

    getDate(): string {
        return this.timestamp.toLocaleDateString()
    }

    getId(): string {
        return this.id.slice(0,5)
    }
}