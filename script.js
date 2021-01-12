const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let isPasswordsMatch = false;

function validateForm(){
    // Using Contraint API
    isValid = form.checkValidity();
    // Style our main message
    if(isValid){
        messageContainer.style.border = " 1px solid green";
        message.textContent = "Successfully Registered!"
        message.style.color = "green";
    } else {
        messageContainer.style.border = " 1px solid red";
        message.textContent = "Did Not Registered Propertly!"
        message.style.color = "red";
        return;
    }
    
    // checking passwords
        if(password1El.value === password2El.value){
            isPasswordsMatch = true;
            password1El.style.borderColor = "green";
            password2El.style.borderColor = "green"; 
        } else {
            isPasswordsMatch = false;
            password1El.style.borderColor = "red";
            password2El.style.borderColor = "red"; 
            message.textContent = "Passwords Do Not Match!!"
            messageContainer.style.borderColor = "red";
            message.style.color = "red";
            return;
        }
}
function storeFormData(){
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    }
    console.log(user);
}

function processFormData(e){
    e.preventDefault();
    validateForm();
    if(isValid && isPasswordsMatch){
        storeFormData();
    } 
}
form.addEventListener('submit', processFormData);
