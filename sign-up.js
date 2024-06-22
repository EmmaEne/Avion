//form validation

let loginButton = document.querySelector('#login');
loginButton.addEventListener('click', validation)
function validation(){

  //store inputs in a variable
  let email = document.querySelector('#mail-input');
  let pswd = document.querySelector('#password-input');
  let resetPswd = document.querySelector('#reset-pswd') 
  
  //store elements to return a message
  let emailMsg = document.querySelector('#email-msg');
  let passwordMsg = document.querySelector('#password');
  let passwordReset = document.querySelector('#password-msg') 

  if(!email || !pswd || !resetPswd) {
    alert('hi')
  }
  else{
    alert('damn')
  }
}