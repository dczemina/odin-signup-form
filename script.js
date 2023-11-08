document.addEventListener("DOMContentLoaded", () => {
    /* First Name */
    const firstNameInput = document.querySelector('#first-name');
    firstNameInput.addEventListener('blur', (e) => {
        if (!validateFirstName(e.target.value)) {
            firstNameInput.classList.add('input-error');
        } else {
            firstNameInput.classList.remove('input-error');
        }
        updateValidationText();
    })
    firstNameInput.addEventListener('input', (e) => {
        if(!validateFirstName(e.target.value)) {
            firstNameInput.classList.add('input-error');
        } else {
            firstNameInput.classList.remove('input-error');
        }
        updateValidationText();
    })
    /* Last Name */
    const lastNameInput = document.querySelector('#last-name');
    lastNameInput.addEventListener('blur', (e) => {
        if(!validateLastName(e.target.value)) {
            lastNameInput.classList.add('input-error');
        } else {
            lastNameInput.classList.remove('input-error');
        }
        updateValidationText();
    })
    lastNameInput.addEventListener('input', (e) => {
        if(!validateLastName(e.target.value)) {
            lastNameInput.classList.add('input-error');
        } else {
            lastNameInput.classList.remove('input-error');
        }
        updateValidationText();
    })
    /* Email */
    const emailInput = document.querySelector('#email');
    emailInput.addEventListener('blur', (e) => {
        if(!validateEmail(e.target.value)) {
            emailInput.classList.add('input-error');
        } else {
            emailInput.classList.remove('input-error');
        }
        updateValidationText();
    })
    emailInput.addEventListener('input', (e) => {
        if(!validateEmail(e.target.value)) {
            emailInput.classList.add('input-error');
        } else {
            emailInput.classList.remove('input-error');
        }
        updateValidationText();
    })
    /* Phone Number */
    const phoneNumberInput = document.querySelector('#phone-number');
    phoneNumberInput.addEventListener('blur', (e) => {
        if(!validatePhoneNumber(e.target.value)) {
            phoneNumberInput.classList.add('input-error');
        } else {
            phoneNumberInput.classList.remove('input-error');
        }
        updateValidationText();
    })
    phoneNumberInput.addEventListener('input', (e) => {
        if(!validatePhoneNumber(e.target.value)) {
            phoneNumberInput.classList.add('input-error');
        } else {
            phoneNumberInput.classList.remove('input-error');
        }
        updateValidationText();
    })
    /* Password */
    const passwordInput = document.querySelector('#password');
    passwordInput.addEventListener('blur', (e) => {
        if(!validatePassword(e.target.value)) {
            passwordInput.classList.add('input-error');
        } else {
            passwordInput.classList.remove('input-error');
        }
        updateValidationText();
    })
    passwordInput.addEventListener('input', (e) => {
        if(!validatePassword(e.target.value)) {
            passwordInput.classList.add('input-error');
        } else {
            passwordInput.classList.remove('input-error');
        }
        updateValidationText();
    })
    /* Password Confirm */
    const passwordConfirmInput = document.querySelector('#password-confirm');
    passwordConfirmInput.addEventListener('blur', (e) => {
        const passwordValue = document.querySelector('#password').value;
        if(!validateConfirmPassword(e.target.value, passwordValue)) {
            passwordConfirmInput.classList.add('input-error');
        } else {
            passwordConfirmInput.classList.remove('input-error');
        }
        updateValidationText();
    })
    passwordConfirmInput.addEventListener('input', (e) => {
        const passwordValue = document.querySelector('#password').value;
        if(!validateConfirmPassword(e.target.value, passwordValue)) {
            passwordConfirmInput.classList.add('input-error');
        } else {
            passwordConfirmInput.classList.remove('input-error');
        }
        updateValidationText();
    })
})

const errors = {
    firstNameRequired: {
        error: false,
        message: 'First name is required'
    },
    lastNameRequired: {
        error: false,
        message: 'Last name is required'
    },
    emailRequired: {
        error: false,
        message: 'Email is required'
    },
    emailPattern: {
        error: false,
        message: 'Email must be a valid email address'
    },
    phoneNumberPattern: {
        error: false,
        message: 'Phone number must be in format XXX-XXX-XXXX'
    },
    passwordRequired: {
        error: false,
        message: 'Password is required'
    },
    passwordLength: {
        error: false,
        message: 'Password must be between 8 and 40 characters'
    },
    passwordSpecialChar: {
        error: false,
        message: 'Password must contain a special character'
    },
    passwordLowercaseChar: {
        error: false,
        message: 'Password must ccontain a lowercase letter'
    },
    passwordUppercaseChar: {
        error: false,
        message: 'Password must contain an uppercase letter'
    },
    passwordNumber: {
        error: false,
        message: 'Password must contain a number'
    },
    confirmPassword: {
        error: false,
        message: 'Passwords must match'
    }
}

const validateFirstName = (value) => {
    errors.firstNameRequired.error = (!value);

    if (errors.firstNameRequired.error) {
            return false;
        }
    return true;
}

const validateLastName = (value) => {
    errors.lastNameRequired.error = (!value);

    if (errors.lastNameRequired.error) {
            return false;
        }
    return true;
}

const validateEmail = (value) => {
    errors.emailRequired.error = (!value);
    errors.emailPattern.error = (!value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/));

    if (errors.emailRequired.error
        || errors.emailPattern.error) {
            return false;
        }
    return true;
}

const validatePhoneNumber = (value) => {
    errors.phoneNumberPattern.error = (value && !value.match(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/));

    if (errors.phoneNumberPattern.error) {
            return false;
        }
    return true;
}

const validatePassword = (value) => {
    errors.passwordRequired.error = (!value);
    errors.passwordLength.error = (8 > value.length || 40 < value.length);
    errors.passwordSpecialChar.error = (value.match(/[^a-zA-Z0-9\s\p{P}]/gu));
    errors.passwordLowercaseChar.error = (!value.match(/[a-z]+/));
    errors.passwordUppercaseChar.error = (!value.match(/[A-Z]+/));
    errors.passwordNumber.error = (!value.match(/[0-9]+/));

    if (errors.passwordRequired.error
        || errors.passwordLength.error
        || errors.passwordSpecialChar.error
        || errors.passwordLowercaseChar.error
        || errors.passwordUppercaseChar.error
        || errors.passwordNumber.error) {
            return false;
        }
    return true;
}

const validateConfirmPassword = (password, confirmPassword) => {
    errors.confirmPassword.error = (password !== confirmPassword);

    if (errors.confirmPassword.error) {
            return false;
        }
    return true;
}

const updateValidationText = () => {
    const formValidation = document.querySelector('#form-validation');

    while (formValidation.firstChild) {
        formValidation.removeChild(formValidation.firstChild);
    }

    for (let validation in errors) {
        if (errors[validation].error) {
            const errorText = document.createElement('div');
            errorText.textContent = errors[validation].message;
            formValidation.appendChild(errorText);
        }
    }
}