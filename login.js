function onChangeEmail(){
    toggleButtonsDisable();
    toggleEmailErrors();
}

function onChangePassword(){
    toggleButtonsDisable();
    togglePasswordErrors();
}

function isEmailValid(){
    const email = document.getElementById("email").value;
    if(!email){
        return false;
    }
    return validateEmail(email);
}

function isPasswordValid(){
    const password = document.getElementById('password').value;
    if (!password){
        return false;
    }
    return true; 
} 

function toggleEmailErrors(){
    const email = document.getElementById('email').value;
    if (!email){
        // mensagem de email obrigatorio
        document.getElementById('email-required-error').style.display="block";
    } else{
        document.getElementById('email-required-error').style.display="none";
    }

    if (validateEmail(email)){
        document.getElementById('email-valid-error').style.display="none";
    } else{
        document.getElementById('email-valid-error').style.display="block";
    }

}

function togglePasswordErrors(){
    const password = document.getElementById('password').value;
    if (!password){
        document.getElementById('password-required-error').style.display="block";
    } else {
        document.getElementById('password-required-error').style.display="none";
    }
}

function toggleButtonsDisable(){
    const emailValid = isEmailValid();   
    document.getElementById('recover-password-button').disabled = !emailValid;

    const password = isPasswordValid();
    document.getElementById('login-button').disabled = !emailValid||!password;
    
}

function validateEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}