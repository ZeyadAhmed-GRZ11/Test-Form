function validateRegistrationForm (username, email, password){
        const isUsernameValid = username.length >= 5;
        const isUserEmailValid = email.includes("@");
        const isUserPasswordValid = password.length >= 8;

        return isUsernameValid && isUserEmailValid && isUserPasswordValid;
}

document.addEventListener("DOMContentLoaded",function(){
     const registrationForm = document.getElementById('registration-form');
     registrationForm.addEventListener('submit', function (event){
        event.preventDefault();

        const username = document.getElementById( 'username' ).value;
        const email = document.getElementById( 'email' ).value;
        const password = document.getElementById( 'password' ).value;

        const isValid = validateRegistrationForm(username, email, password);
       
        if (isValid) {
            console.log( "Registration form is valid" );
        } else{
            console.error('Not valid');
        }
     });
});

// document.addEventListener("DOMContentLoaded", function(){
//     const registration = document.getElementById('register-button');
//     registrationForm.addEventListener('submit',function (event){

//         constusername = document.getElementById( 'username').value;
//     })
// })


