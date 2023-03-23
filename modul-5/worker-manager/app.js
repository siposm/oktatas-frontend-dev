import { Worker } from './worker.js'
import { createWorkerArray } from './arrayCreator.js'
import { Renderer } from './renderer.js'

let ul = document.querySelector('#content ul')
let tbody = document.querySelector('tbody')

let workers = createWorkerArray()
let renderer = new Renderer()
ul.innerHTML = renderer.renderList(workers)
tbody.innerHTML = renderer.renderTable(workers)


// ---------------------------------
//      Sorting and other functions
// ---------------------------------
document.querySelector('#sort-by-age-btn').addEventListener('click', sortBy)
document.querySelector('#sort-by-job-btn').addEventListener('click', sortBy)
document.querySelector('#sort-by-name-btn').addEventListener('click', sortBy)

function sortBy (param) {
    let sortByValue = param.target.dataset.param
    console.log(sortByValue)

    let temp = []
    if(sortByValue === 'age')
        temp = workers.sort((a,b) => { return a[sortByValue] - b[sortByValue] })
    else if(sortByValue === 'name' || sortByValue === 'job')
        temp = workers.sort((a,b) => { return a[sortByValue].localeCompare(b[sortByValue]) })

    // if(param === 'age')
    //     temp = workers.sort((a,b) => { return a.age - b.age })
    // else if(param === 'job')
    //     temp = workers.sort((a,b) => { return a.job - b.job })
    // else if(param === 'name')
    //     temp = workers.sort((a,b) => { return a.name - b.name })

    console.log(temp)

    workers = temp

    tbody.innerHTML = renderer.renderTable(workers)
}


// ------------------------
//      CSS handlers
// ------------------------
document.querySelector('#flexSwitchCheckDefault').addEventListener('click', switchMode)

window.onload = function () {
    document.styleSheets[1].disabled = true
}

function switchMode () {
    document.styleSheets[1].disabled = !document.styleSheets[1].disabled
}