import { ToDo } from "./todo"

export class Renderer {
    render(todos: ToDo[]): void {
        let target = document.querySelector('#tbody-target')
        target!.innerHTML = ''
        todos.forEach(x => {
            let tr = document.createElement('tr')
            let tdId = document.createElement('td')
            let tdName = document.createElement('td')
            let tdDesc = document.createElement('td')
            let tdTime = document.createElement('td')

            tdId.innerHTML = x.getId()
            tdName.innerHTML = x.name
            tdDesc.innerHTML = x.description
            tdTime.innerHTML = x.getDate()

            tr.appendChild(tdId)
            tr.appendChild(tdName)
            tr.appendChild(tdDesc)
            tr.appendChild(tdTime)
            target?.appendChild(tr)
        })
    }
}