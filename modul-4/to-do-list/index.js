let ul = document.querySelector("#list > ul")
let btn = document.querySelector("#add-new-todo-btn")
let input = document.querySelector("#new-todo-input")

btn.addEventListener('click', clickHandler)
input.addEventListener('keypress', clickHandler)

function clickHandler (e) {
    if (e.key === 'Enter' || e.type === 'click') {
        if (input.value !== '') {
            let li = document.createElement('li')
            li.innerHTML = input.value
            ul.appendChild(li)
    
            li.addEventListener('click', function () {
                this.classList.toggle('ready')
            })
        
            input.value = '' // reset
        }
    }
    
}

