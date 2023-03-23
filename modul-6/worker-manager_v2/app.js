import { Student } from './student.js'
import { createStudentArray } from './arrayCreator.js'
import { Renderer } from './renderer.js'

let ul = document.querySelector('#content ul')
let tbody = document.querySelector('tbody')

let students = createStudentArray()
let renderer = new Renderer()
tbody.innerHTML = renderer.renderTable(students)


// ---------------------------------
//      Sorting and other functions
// ---------------------------------
document.querySelector('#sort-by-age-btn').addEventListener('click', sortBy)
document.querySelector('#sort-by-active-btn').addEventListener('click', sortBy)
document.querySelector('#sort-by-name-btn').addEventListener('click', sortBy)

function sortBy (param) {
    let sortByValue = param.target.dataset.param

    if(sortByValue === 'BirthYear' || sortByValue === 'IsActive')
        students.sort((a,b) => { return a[sortByValue] - b[sortByValue] })
    else if(sortByValue === 'Name')
        students.sort((a,b) => { return a[sortByValue].localeCompare(b[sortByValue]) })
    
    tbody.innerHTML = renderer.renderTable(students)
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