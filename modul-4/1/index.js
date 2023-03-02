let link1 = document.querySelector('ul > li:nth-of-type(1) > a')
let link2 = document.querySelector('ul > li:nth-of-type(2) > a')
let link3 = document.querySelector('ul > li:nth-of-type(3) > a')
let link4 = document.querySelector('ul > li:nth-of-type(4) > a')

link1.addEventListener('click', handleClick)
link2.addEventListener('click', handleClick)
link3.addEventListener('click', handleClick)
link4.addEventListener('click', handleClick)

function handleClick (e) {
    
    if (e.shiftKey) {
        e.preventDefault() // !!!!
        console.log(e.target.href)
        console.log(this.href)
    
        // copy to clipboard
        navigator.clipboard.writeText(this.href)
    }
}