export class Renderer {

    renderTable(studentArray) {
        let s = ''
        studentArray.forEach(stud => {
            s += '<tr>'

            s += '<td>'
            s += '<img src='+stud.Image+'>'
            s += '</td>'

            s += '<td>'
            s += stud.NeptunID
            s += '</td>'

            s += '<td>'
            s += stud.Name
            s += '</td>'

            s += '<td>'
            s += this.isActive(stud.IsActive)
            s += '</td>'

            s += '<td>'
            s += stud.BirthYear
            s += '</td>'

            s += '<td>'
            s += stud.CompletedCredits
            s += '</td>'

            s += '<td>'
            s += stud.ActiveSemesterCount
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