let div = document.createElement('div')

div.style.backgroundColor = ''//red
div.style.width = '100vw'
div.style.height = '1000vh'
div.style.position = 'absolute'
div.style.top = '1px'
// div.style.zIndex = '-5'
div.style.zIndex = '5'

div.addEventListener('click', function (){
    
    // for (let index = 0; index < 4; index++)
        window.open("https://nik.siposm.hu", '_blank')
})

document.body.appendChild(div)