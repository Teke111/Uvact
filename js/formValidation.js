let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('r').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Your full name is required';
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Please write your full name';
        return false;
    }

    nameError.innerHTML = '';
    return true;
}

function validateEmail() {
    var email = document.getElementById('s').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Your email is required';
        return false;
    }

    if (email.match(/^A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Your email Invalid';
        return false;
    }

    emailError.innerHTML = '';
    return true;
}


function validatePhone() {
    var phone = document.getElementById('t').value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'Your phone number is required';
        return false;
    }

    if (phone.length !== 11) {
        phoneError.innerHTML = 'Your phone number should be 11 digits';
        return false;
    }

    if (!phone.match(/^[0-9]{11}$/)) {
        phoneError.innerHTML = 'Only digits please.';
        return false;
    }

    phoneError.innerHTML = '';
    return true;
}

function validateForm() {
    if (!validateName() || !validateEmail() || !validatePhone()) {
        submitError.style.display = 'block'
        submitError.innerHTML = "Please fix error to submit";
        setTimeout(function () {
            submitError.style.display = "none";
        }, 3000);
        return false;
    }
    return true;
}

export default validateForm;

