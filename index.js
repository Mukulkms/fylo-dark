const email = document.querySelector('input[name=email]');
const button = document.querySelector('#submit');
const text =  document.querySelector('#message');

const validateEmail= (email) => {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

button.addEventListener('click',()=>{
    if(validateEmail(email.value)){
      text.innerText="";
    }else{
      text.innerText="please enter a valid email address";
    }
})