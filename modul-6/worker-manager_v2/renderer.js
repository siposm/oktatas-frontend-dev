export class Renderer {

    renderTable(studentArray) {
        let s = ''
        studentArray.forEach(stud => {
            s += '<tr>'

            s += '<td>'
            s += '<img src='+stud.image+'>'
            s += '</td>'

            s += '<td>'
            s += stud.name
            s += '</td>'

            s += '<td>'
            s += this.isActive(stud.isActive)
            s += '</td>'

            s += '<td>'
            s += stud.birthYear
            s += '</td>'

            s += '<td>'
            s += stud.completedCredits
            s += '</td>'

            s += '<td>'
            s += stud.activeSemesterCount
            s += '</td>'

            s += '</tr>'
        })
        return s
    }

    isActive(status) {
        return status
            ?
            '<span class="badge rounded-pill bg-success mx-2">T</span>'
            :
            '<span class="badge rounded-pill bg-danger mx-2">F</span>'
    }
}