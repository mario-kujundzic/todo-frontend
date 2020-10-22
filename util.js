const PASSWORD_LENGTH = 6;

const EMAIL_REGEX = /\S+@\S+\.\S+/;

const emailIsValid = (email) => {
    return EMAIL_REGEX.test(email);
}

const getEmailErrors = (email) => {
    let error = null;
    email = email.trim();
    if (!email) {
        error = "Email is required!";
    } else if (!emailIsValid(email)) {
        error = "Email must be valid!";
    }
    return error;
}

const getPasswordErrors = (password) => {
    let error = null;
    password = password.trim();
    if (!password) {
        error = "Password is required!";
    } else if (password.length < PASSWORD_LENGTH) {
        error = "Password must be at least 6 characters!";
    }
    return error;
}

export {PASSWORD_LENGTH, emailIsValid, getEmailErrors, getPasswordErrors};