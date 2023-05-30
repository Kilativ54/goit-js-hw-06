const size = document.querySelector('#font-size-control');
const textSpan = document.querySelector('span#text')
size.addEventListener('input', changeFontSize);
function changeFontSize(event){
textSpan.style.fontSize =  `${event.target.value}px`
}

