export class Renderer {
    renderList(workerArray) {
        let s = ''
        workerArray.forEach(element => {
            s += '<li>'
            s += element.name
            s += '<span class="badge rounded-pill '+this.positionChecker(element.job)+' mx-3">'+element.job+'</span>'
            s += '<span class="badge rounded-pill bg-secondary">'+element.age+'</span>'
            s += '</li>'
        })
        return s
    }

    renderTable(workerArray) {
        let s = ''
        workerArray.forEach(element => {
            s += '<tr>'
            s += '<td>'
            s += element.name
            s += '</td>'
            
            s += '<td>'
            s += '<span class="badge rounded-pill '+this.positionChecker(element.job)+' mx-3">'+element.job+'</span>'
            s += '</td>'

            s += '<td>'
            s += '<span class="badge rounded-pill bg-secondary">'+element.age+'</span>'
            s += '</td>'
            s += '</tr>'
        })
        return s
    }

    positionChecker(position) {
        
        let map = new Map()

        map.set('teacher','bg-primary')
        map.set('technical assistant','bg-success')
        map.set('university instructor','bg-danger')
        map.set('senior lecturer','bg-dark')
        map.set('registrar office worker','bg-info')
        map.set('system operator','bg-warning')
        
        // map.set('assistant lecturer','bg-secondary')
        // map.set('associate professor','bg-secondary')
        // map.set('research fellow','bg-secondary')
        // map.set('professor emeritus','bg-secondary')
        map.set('default','bg-secondary')
        
        if(map.has(position))
            return map.get(position)
        else
            return map.get('default')
    }
}