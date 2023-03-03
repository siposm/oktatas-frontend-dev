let iframe = document.querySelector('.div2 > iframe')

let ytLinks = [
    'https://www.youtube.com/embed/Az-tpmoEB2k',
    'https://www.youtube.com/embed/MX1wq2CcACQ',
    'https://www.youtube.com/embed/iOD4cEykse8',
    'https://www.youtube.com/embed/8pIl0Bv7mmQ']

setInterval(function(){
    // window.location.reload(1);
    iframe.src = ytLinks[Math.floor(Math.random() * ytLinks.length)]
}, 3000);
