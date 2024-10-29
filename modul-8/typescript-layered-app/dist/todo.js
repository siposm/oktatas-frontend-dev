export class ToDo {
    id = '';
    name = '';
    description = '';
    timestamp = new Date();
    constructor() {
        this.id = this.generateGuid();
    }
    generateGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
            .replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    getDate() {
        return this.timestamp.toLocaleDateString();
    }
    getId() {
        return this.id.slice(0, 5);
    }
}
