const validation = document.querySelector('#validation-input');
const inputLength = validation.getAttribute('data-length')
validation.addEventListener('blur', control)
function control(event){
if( event.currentTarget.value.length === Number(inputLength)){
    if(validation.classList.contains('invalid')){
        validation.classList.remove('invalid');
        validation.classList.add("valid");
    }
    
}
else{
    validation.classList.add("invalid")  
}
}
console.log(validation.textContent.length)