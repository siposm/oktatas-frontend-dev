let space = document.querySelector('#space')

document.addEventListener('click', function (e) {
    let star = document.createElement('div')
    star.classList.add('star')
    
    let x = e.clientX
    let y = e.clientY
    
    star.style.position = 'fixed'
    star.style.top = y+'px'
    star.style.left = x+'px'

    space.appendChild(star)
})